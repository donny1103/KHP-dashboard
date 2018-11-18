import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
class Chat extends Component {
  state = {
    messages:[],
    message:''
  }
  handleKeyChange = (value) => {
    this.setState({message: value});
  }
  onMessageSend = () => {
    this.state.messages.push(this.state.message);
    this.setState({message:''})
  }
  render () {

    return (
      <div className='chat'>
        <Messages 
        Messages={this.state.messages} 
        clientName={this.props.clientName}
        />
        <ChatBar         
        onKeyChange={this.handleKeyChange}
        onMessageSend={this.onMessageSend}
        Message={this.state.message}/>
      </div>
    );
  };
}

export default Chat;