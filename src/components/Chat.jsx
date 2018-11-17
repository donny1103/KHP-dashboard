import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
class Chat extends Component {
  state = {
    messages:['Robbie: Hi, my name is Robbie','Dan: How are you Robbie?']
  }

  render () {

    return (
      <div className='chat'>
        <Messages Messages={this.state.messages}/>
        <ChatBar />
      </div>
    );
  };
}

export default Chat;