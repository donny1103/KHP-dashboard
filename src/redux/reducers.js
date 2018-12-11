import { combineReducers } from 'redux';

const queue  = (state = { prioity: '', all:'' }, action) => {
  switch (action.type) {
    case 'RECEIVE_QUEUE':
      return { ...state, prioity:action.payload, all: action.allQueue };
    default:
      return state;
  }
};

const showChatBoard = (state = {isChatBoardShown:false}, action) => {
  switch (action.type){
    case 'SHOW_CHAT_BOARD':
      return {...state, isChatBoardShown: action.bool};
    default:
      return state;
  }
}

const engagedClientsInitialState = {
  engagedClients:[ ],
  activeClient: {messages:[]}
};

const engagedClients = ( state = engagedClientsInitialState, action) => {
  switch (action.type){
    case 'ENGAGED_CLIENTS':
      return {...state, engagedClients: [...state.engagedClients, action.payload] };
    case 'ACTIVE_CLIENT':
      return {...state, activeClient: action.payload};
    case 'SEND_MESSAGE':
      return {...state, activeClient: { messages:[...state.activeClient.messages, action.payload]}}
    default:
    return state;
  }
}

const activePrioity = (state = {activePrioity:'immediatePrioity'}, action) => {
  switch (action.type) {
    case 'ACTIVE_PRIOITY':
      return {...state, activePrioity: action.payload };
  default:
    return state;
  }
}

export default combineReducers({
  queue,
  showChatBoard,
  engagedClients,
  activePrioity
 });