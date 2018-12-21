import React from 'react';
import moment from 'moment';
import { Icon } from 'antd';

const ChatBar = ({ sendMessage, clientId, socket, wsId }) => {
  let input;

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      if(clientId && input.value){
        let counsellorMsg = {
          type:'toUserMsg',
          counselerId: wsId,
          userId: clientId,
          text: input.value,
          time: moment().format('h:mm:ss a')
        }

        sendMessage(clientId, counsellorMsg);
        socket.send(JSON.stringify(counsellorMsg));
      }
      input.value = '';
    }
  }

  return (
    <div className="chatbar">
        <input 
          className="chat-input"
          ref={node => input = node}
          onKeyPress={onPressEnter}
        />
      <div className="chatbar-icon">
        <Icon type="smile" />
        <Icon type="plus-circle" />
      </div>
    </div>
  )
};

export default ChatBar;