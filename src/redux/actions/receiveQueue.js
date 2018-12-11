const severities = {
  lowPrioity: [1,25],
  mediumPrioity: [25,50],
  highPrioity: [50,75],
  immediatePrioity: [75,100]
}

let IP = [...severities.immediatePrioity];
let HP = [...severities.highPrioity];
let MP = [...severities.mediumPrioity];
let LP = [...severities.lowPrioity];

const receiveQueue = () => dispatch => {

  const socket = new WebSocket('ws://localhost:3001');

  socket.onmessage = (data) => {
    const parsedData = JSON.parse(data.data);
    if (parsedData.queue){
      let {queue} = parsedData;
      let lowPrioity = [];
      let mediumPrioity = [];
      let highPrioity = [];
      let immediatePrioity = [];

      for(let key in queue){
        if (queue[key].severity >= LP[0] && queue[key].severity < LP[1]){
          lowPrioity = [...lowPrioity,{...queue[key], id:key}];
        }
        else if (queue[key].severity >= MP[0] && queue[key].severity < MP[1]){
          mediumPrioity = [...mediumPrioity, {...queue[key], id:key}];
        }
        else if (queue[key].severity >= HP[0] && queue[key].severity < HP[1]){
          highPrioity = [...highPrioity,{...queue[key], id:key}];
        }
        else if (queue[key].severity >= IP[0] && queue[key].severity <= IP[1]){
          immediatePrioity = [...immediatePrioity,{...queue[key], id:key}];
        }
      }
      
      return dispatch ({
        type: 'RECEIVE_QUEUE',
        payload:{
          lowPrioity,
          mediumPrioity,
          highPrioity,
          immediatePrioity
        },
        allQueue:queue
      });
    }
  }
};

export default receiveQueue;
