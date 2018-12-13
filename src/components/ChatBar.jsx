import React from 'react';
import { Input } from 'antd';
const ChatBar = ({ message, onKeyChange, sendMessage }) => {
  return (
    <div className="chatbar">
      <Input 
        className="chat-input"
        size="large"
        value={message.text} 
        onChange={(e)=>onKeyChange(e.target.value)}
        onPressEnter={sendMessage}
      />
    </div>
  )
};

export default ChatBar;