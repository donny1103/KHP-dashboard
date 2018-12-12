const initialState = {
  connected: false,
  queue: {}
};

const socketReducer = (state = initialState, action ) => {
  switch (action.type) {
    case 'SOCKET_CONNECTION_INIT':
      return {...state, connected: false};

    case 'SOCKET_CONNECTION_SUCCESS':
      return {...state, connected: true};

    case 'SOCKET_CONNECTION_ERROR':
      return {...state, connected: false};

    case 'SOCKET_CONNECTION_CLOSED':
    return {...state, connected: false};

    case 'SOCKET_MESSAGE':
      return {...state, ...action.data}

    case 'INITIATE_CHAT':
      return {...state, queue: action.data}

    case 'REMOVE_QUEUE':
      return {...state, priority: action.data}

    default:
      return state;
  }
}

export default socketReducer;