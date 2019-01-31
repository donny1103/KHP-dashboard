import { sendMessage } from '../actions/';

const socketConnectionInit = socket => ({
  type: 'SOCKET_CONNECTION_INIT',
  socket
});

const socketConnectionSuccess = () => ({
  type: 'SOCKET_CONNECTION_SUCCESS',
});

const socketConnectionError= () =>  ({
  type: 'SOCKET_CONNECTION_ERROR',
});

const socketConnectionClosed= () =>  ({
  type: 'SOCKET_CONNECTION_CLOSED',
});

const socketMessage = data => ({
  type: 'SOCKET_MESSAGE',
  data
});

const setCounsellorId = id => ({
  type: 'COUNSELLOR_ID',
  id
});

const setDisconnectedClient = id => ({
  type: 'DISCONNECTED_CLIENT',
  id
})

const injectId = (queue) => {
  for (let key in queue) {
    queue[key].id = key;
  }
  return queue;
}

const categorizePriority = (queue) => {
  const severities = {
    lowPriority: [1,25],
    mediumPriority: [25,50],
    highPriority: [50,75],
    immediatePriority: [75,100]
  };
  
  let IP = [...severities.immediatePriority];
  let HP = [...severities.highPriority];
  let MP = [...severities.mediumPriority];
  let LP = [...severities.lowPriority];
  
  let lowPriority = [];
  let mediumPriority = [];
  let highPriority = [];
  let immediatePriority = [];

  for(let key in queue){
    if (queue[key].severity >= LP[0] && queue[key].severity < LP[1]){
      lowPriority = [...lowPriority,{...queue[key], id:key}];
    }
    else if (queue[key].severity >= MP[0] && queue[key].severity < MP[1]){
      mediumPriority = [...mediumPriority, {...queue[key], id:key}];
    }
    else if (queue[key].severity >= HP[0] && queue[key].severity < HP[1]){
      highPriority = [...highPriority,{...queue[key], id:key}];
    }
    else if (queue[key].severity >= IP[0] && queue[key].severity <= IP[1]){
      immediatePriority = [...immediatePriority,{...queue[key], id:key}];
    }
  }

  return {
    low: lowPriority,
    medium: mediumPriority,
    high: highPriority,
    immediate: immediatePriority
  }
}

export const initializeSocket = () => dispatch => {

  const socket = new WebSocket(process.env.PORT || 'ws://localhost:3001');
  dispatch(socketConnectionInit(socket));
  socket.onopen = () => {
    socket.send(JSON.stringify({type:'counsellor'}))
    dispatch(socketConnectionSuccess());  
  };
  
  socket.onerror = () => {
    dispatch(socketConnectionError());  
  };

  socket.onmessage = json => {
    let parsedJson = JSON.parse(json.data);
    console.log(parsedJson)
    switch(parsedJson.type){
      case 'queue':
        let queue = injectId(parsedJson.queue);
        let priority = categorizePriority(queue);
        dispatch(socketMessage({queue,priority}));
        break;
      case 'id':
        dispatch(setCounsellorId(parsedJson.id));
        break;
      case 'disconnect':
        dispatch(setDisconnectedClient(parsedJson.id));
        break;
      case 'toCounsellorMsg':
        dispatch(sendMessage(parsedJson.userId, parsedJson));
        break;
      default:
        console.log('Error: Unregonized message type:', parsedJson.type)
    }
  };

  socket.onclose = () => {
    dispatch(socketConnectionClosed());
  };
};


