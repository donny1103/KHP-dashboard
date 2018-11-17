import React from 'react';
import { Input,Button } from 'antd';
const ChatBar = (props) => {
  return (
    <div className="chat-input">
      <Input style={{width: '45%'}}/>
      <Button type='primary'>Send</Button>
    </div>
  )
};

export default ChatBar;
