import React from 'react';
import moment from 'moment';

const ChatBar = ({ sendMessage, clientId, socket, wsId }) => {
  let input;

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      if(clientId && input.value){
        let msgTime = moment().format('h:mm:ss a');
        sendMessage(clientId, {time: msgTime, text:input.value});

        let msgToSend = {
          type:'toUserMsg',
          userId: wsId,
          text: input.value,
          time: msgTime
        }
        socket.send(JSON.stringify(msgToSend));
      }
      input.value = '';
    }
  }

  return (
    <div className="chatbar">
      <input 
        className="chat-input"
        size="large"
        ref={node => input = node}
        onKeyPress={onPressEnter}
      />
    </div>
  )
};

export default ChatBar;