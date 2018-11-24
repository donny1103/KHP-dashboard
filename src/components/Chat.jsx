import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import { Col} from 'antd';
import 'antd/dist/antd.css';
import './Chat.css';
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
      <Col className='chat' xs={24} sm={18} md={18} lg={12} xl={12}>
        <Messages 
        Messages={this.state.messages} 
        clientName={this.props.clientName}
        />
        <ChatBar         
        onKeyChange={this.handleKeyChange}
        sendMessage={this.sendMessage}
        Message={this.state.message}/>
      </Col>
    );
  };
}

export default Chat;