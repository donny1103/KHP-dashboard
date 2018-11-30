import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';

class Chat extends Component {
  state = {
    messages:[],
    message:''
  }
  handleKeyChange = (value) => {
    this.setState({message: value});
  }
  sendMessage = () => {
    this.state.messages.push(this.state.message);
    this.setState({message:''})
  }

  render () {

    return (
      <>
        <Row type="flex" justify="center" align="middle" className="chat-header">
          {this.props.clientName}
        </Row>

        <Messages 
          Messages={this.state.messages} 
          clientName={this.props.clientName}
        />

        <ChatBar         
          onKeyChange={this.handleKeyChange}
          sendMessage={this.sendMessage}
          Message={this.state.message}
        />
      </>
    );
  };
}

export default Chat;