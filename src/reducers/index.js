import { combineReducers } from 'redux';
import socketReducer from './socketReducer';

const toggleChatBoard = (state = false, action) => {
  switch (action.type){
    case 'TOGGLE_CHAT_BOARD':
      return {...state, ...action.bool};
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
      return {engagedClients: [...state.engagedClients, action.payload] };
    case 'ACTIVE_CLIENT':
      return {activeClient: action.payload};
    case 'SEND_MESSAGE':
      return {activeClient: { messages:[...state.activeClient.messages, action.payload]}}
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

export default combineReducers({
  socket: socketReducer,
  isChatBoardShown: toggleChatBoard,
  activePriority,
 });