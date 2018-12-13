import { combineReducers } from 'redux';
import socketReducer from './socketReducer';

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

export default combineReducers({
  socket: socketReducer,
  isChatBoardShown: toggleChatBoard,
  activePriority,
  engagingClientId,
  engagedClientsId,
 });