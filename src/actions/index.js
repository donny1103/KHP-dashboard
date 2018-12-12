export const activePriority = prioity => ({
  type: 'ACTIVE_PRIORITY',
  payload: prioity
});

export const toggleChatBoard = bool => ({
  type:'TOGGLE_CHAT_BOARD',
  bool
});

export const sendMessage = message => ({
  type: 'SEND_MESSAGE',
  payload: message
});

export const initiateChat = (id) => (dispatch, getState) => {
  let {queue} = getState().socket;
  let newQueue = {...queue};
  newQueue[id].messages = [];
  dispatch({
    type:'INITIATE_CHAT',
    data: newQueue
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
