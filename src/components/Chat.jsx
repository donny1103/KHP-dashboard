import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
class Chat extends Component {
  state = {
    messages:['Hi, my name is AAA','How are you AAA?']
  }

  render () {

    return (
      <div className='chat'>
        <Messages Messages={this.state.messages} clientName={this.props.clientName}/>
        <ChatBar />
      </div>
    );
  };
}

export default Chat;