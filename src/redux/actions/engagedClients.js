const engagedClients = (clientObj) => ({
  type: 'ENGAGED_CLIENTS',
  payload: clientObj
});

const activeClient = (clientObj) => ({
  type: 'ACTIVE_CLIENT',
  payload: clientObj
});

const sendMessage = (message) => ({
  type: 'SEND_MESSAGE',
  payload: message
});

export { engagedClients, activeClient, sendMessage };

