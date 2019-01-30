import { combineReducers } from 'redux';

const toggleChatBoard = (state = false, action) => {
  switch (action.type){
    case 'TOGGLE_CHAT_BOARD':
      return action.bool;
    default:
      return state;
  }
}

const engagingClientId = (state = '', action) => {
  switch (action.type){
    case 'ENGAGING_CLIENT_ID':
      return action.payload;
    default:
      return state;
  }
}

const engagedClientsId = (state = [], action) => {
  switch (action.type){
    case 'ENGAGED_CLIENTS_ID':
      return [...state, action.payload];
    default:
      return state;
  }
}

const activePriority = (state = 'immediate', action) => {
  switch (action.type) {
    case 'ACTIVE_PRIORITY':
      return action.payload;
  default:
    return state;
  }
}

let socketInitialState = { 
  connected: false, 
  queue: {}, 
  priority: {}, 
  id:'',
  disconnectIds:[],
  receivedMessage:{}
};

const socketReducer = (state = socketInitialState, action) => {
  switch (action.type) {
    case 'SOCKET_CONNECTION_INIT':
      return {...state, ws: action.socket};

    case 'SOCKET_CONNECTION_SUCCESS':
      return {...state, connected: true};

    case 'SOCKET_CONNECTION_ERROR':
      return {...state, connected: false};

    case 'SOCKET_CONNECTION_CLOSED':
      return {...state, connected: false};

    case 'COUNSELLOR_ID': 
      return {...state, id: action.id};

    case 'SOCKET_MESSAGE':
      return {...state, queue: {...state.queue, ...action.data.queue}, priority: action.data.priority};
    
    case 'DISCONNECTED_CLIENT':
      return {...state, disconnectIds: [...state.disconnectIds, action.id]};

    case 'INITIATE_CHAT':
      return {...state, queue: action.data};

    case 'REMOVE_QUEUE':
      return {...state, priority: action.data};

    case 'ADD_MESSAGE':
      return  {...state, queue: action.data};

    default:
      return state;
  }
}

export default combineReducers({
  socket: socketReducer,
  isChatBoardShown: toggleChatBoard,
  activePriority,
  engagingClientId,
  engagedClientsId,
 });