export const setActivePriority = prioity => ({
  type: 'ACTIVE_PRIORITY',
  payload: prioity
});

export const toggleChatBoard = bool => ({
  type:'TOGGLE_CHAT_BOARD',
  bool
});

export const initiateChat = (id) => (dispatch, getState) => {
  let queue = {...getState().socket.queue};
  queue[id].messages = [];
  dispatch({
    type:'INITIATE_CHAT',
    data: queue
  })
}

export const removeQueue = (id) => (dispatch, getState) => {
  let {priority} = getState().socket;
  let { activePriority } = getState();

  let newArr = priority[activePriority].filter(queue => queue.id !== id);
  let newPriority = {...priority};
  newPriority[activePriority] = newArr
  dispatch({
    type:'REMOVE_QUEUE',
    data: newPriority
  })
}

export const setEngagingClientId = (id) => dispatch => {
  dispatch({
    type: 'ENGAGING_CLIENT_ID',
    payload: id
  })
}

export const setEngagedClientsId = (id) => dispatch => {
  dispatch({
    type: 'ENGAGED_CLIENTS_ID',
    payload: id
  })
}

export const sendMessage = (id, message) => (dispatch, getState) => {
  let queue = {...getState().socket.queue};
  queue[id].messages = [...queue[id].messages, message]
  dispatch({
    type: 'ADD_MESSAGE',
    data: queue
  })
};


