import React from 'react';
import { Input,Button } from 'antd';
const ChatBar = (props) => {

  return (
    <div className="chat-input">
      <Input style={{width: '35%', marginLeft: '5rem'}}/>
      <Button type='primary'style={{width: '10%', marginLeft: '1rem', backgroundColor: '#0b95c8'}} >Send</Button>
    </div>
  )

};

export default ChatBar;