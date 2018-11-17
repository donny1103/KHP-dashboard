import React, { Component } from 'react';
import CharBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import './Chat.css'
class Chat extends Component {
  state = {
    messages:['Hi, my name is AAA','How are you AAA?']
  }

  render () {

    return (
      <div className='chat'>
        <Messages Messages={this.state.messages}/>
        <CharBar />
      </div>
    );
  };
}

export default Chat;