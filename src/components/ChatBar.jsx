import React from 'react';
import { Input } from 'antd';
const ChatBar = (props) => {

  const onKeyChange = (e) => {
    props.onKeyChange(e.target.value)
  }

  const onPressEnter = () => {
    if (props.Message){
      props.sendMessage();
    }
  }

  return (
    <div className="chatbar">
      <Input 
        className="chat-input"
        size="large"
        value={props.Message} 
        onChange={onKeyChange}
        onPressEnter={onPressEnter}
      />
    </div>
  )
};

export default ChatBar;