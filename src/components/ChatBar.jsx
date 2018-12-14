import React from 'react';
import moment from 'moment';

const ChatBar = ({ sendMessage, clientId, socket }) => {
  let input;

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      if(clientId && input.value){
        let msgTime = moment().format('h:mm:ss a');
        sendMessage(clientId, {time: msgTime, text:input.value});

        let msgToSend = {
          type:'toUserMsg',
          userId: clientId,
          text: input.value,
          time: msgTime
        }
        socket.send(JSON.parse(msgToSend));
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