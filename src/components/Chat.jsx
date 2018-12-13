import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

class Chat extends Component {
  state = {
    input:''
  }

  handleKeyChange = (text) => {
    this.setState({input: {time: moment().format('h:mm:ss a'), text}});
  }

  sendMessage = () => {
    let {engagingClientId} = this.props;
    if (engagingClientId && this.state.input) {
      this.props.sendMessage(engagingClientId, this.state.input);
    }
    this.setState({input:''})
  }

  render () {
    const {engagingClientId} = this.props;
    const engagingClient = this.props.queue ? this.props.queue[engagingClientId] : null;
    const clientName = engagingClient ? engagingClient.name : null;
    const messages = engagingClient ? engagingClient.messages : [];
    return (
      <>
        <Row type="flex" justify="center" align="middle" className="chat-header">
          {clientName}
        </Row>

        <Messages 
          messages={messages} 
          clientName={clientName}
        />

        <ChatBar         
          onKeyChange={this.handleKeyChange}
          sendMessage={this.sendMessage}
          message={this.state.input}
        />
      </>
    );
  };
}

export default Chat;