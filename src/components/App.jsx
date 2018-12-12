import React, { Component } from 'react';
import Navbar from '../containers/NavbarWrapper';
import { PropTypes } from 'prop-types';
import Queue from '../containers/QueueWrapper';
// import Chat from './Chat.jsx'
// import ChatBoard from './ChatBoard.jsx';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { initializeSocket } from '../actions/socket';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount () {
    const { dispatch } = this.props;
    dispatch(initializeSocket());
  }

  render() {
    const {isChatBoardShown} = this.props;
    const chatBoardSpan = isChatBoardShown ? 5 : 1; 
    const messageSpan = isChatBoardShown ? 5 : 6;
    const {activePriority} = this.props;
    return (
      <Row className="App">
        <Col className="navbar" xs={0} sm={0} md={4} lg={4} xl={4}>
          <Navbar />
        </Col>
        <Col className="queue" xs={0} sm={4} md={6} lg={messageSpan} xl={messageSpan}>
          <Queue />
        </Col>
        {/* <Col className="queue" xs={0} sm={4} md={6} lg={messageSpan} xl={messageSpan}>
          <Queue 
            data={groupedPrioity}
            activePrioity={this.props.activePrioity.activePrioity} 
          />
        </Col>

        <Col className='chat' xs={24 - chatBoardSpan} sm={20 - chatBoardSpan} md={20 - messageSpan - chatBoardSpan} lg={20 - messageSpan - chatBoardSpan} xl={20 - messageSpan - chatBoardSpan}>
          <Chat 
            activeClient={this.props.engagedClients.activeClient} 
            Messages={this.state.messages}
            sendMessage={this.handleMessageSent}
          />
        </Col>

        <Col className='chat-board' span={chatBoardSpan}>
          <ChatBoard 
            engagedClients={this.props.engagedClients.engagedClients}
            onPanelClick={this.handelQueueClick}
          />
        </Col>   */}
      </Row>
    );
  }
}

const mapState = state => ({
  socketConnected: state.socket.connected,
  isChatBoardShown: state.isChatBoardShown,
  activePriority: state.activePriority,
})

export default connect(mapState)(App);


