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
    this.setState({input: {type: 'counsellor-message',time: moment().format('dddd, h:mm:ss a'), content: text}});
  }

  sendMessage = (id) => () => {
    if (this.props.selectedQueue) {
      this.props.sendMessage(id,this.state.input);
    }
    this.setState({input:''})
  }

  render () {

    const clientName = this.props.selectedQueue && this.props.selectedQueue.name;
    const queueId = this.props.selectedQueue && this.props.selectedQueue.id;

    return (
      <>
        <Row type="flex" justify="center" align="middle" className="chat-header">
          {clientName}
        </Row>

        <Messages 
          Messages={this.props.Messages} 
          clientName={clientName}
          queueId={queueId}
        />

        <ChatBar         
          onKeyChange={this.handleKeyChange}
          sendMessage={this.sendMessage(queueId)}
          Message={this.state.input}
          queueId={queueId}
        />
      </>
    );
  };
}

export default Chat;