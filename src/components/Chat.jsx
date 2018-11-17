import React, { Component } from 'react';
import CharBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import './Chat.css'
class Chat extends Component {
  
  render () {

    return (
      <div className='chat'>
        <Messages Messages={this.props.Messages}/>
        <CharBar />
      </div>
    );
  };
}

export default Chat;