import React from 'react';
import moment from 'moment';

const ChatBar = ({ sendMessage, clientId }) => {
  let input;

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      if(clientId && input.value){
        sendMessage(clientId, {time: moment().format('h:mm:ss a'), text:input.value});
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