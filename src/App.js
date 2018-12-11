import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx';
import Queue from './components/Queue.jsx';
import Chat from './components/Chat.jsx'
import ChatBoard from './components/ChatBoard.jsx';
import { Row, Col } from 'antd';
import './App.scss';
import { connect } from 'react-redux';
import receiveQueue from '../src/redux/actions/receiveQueue';

const mapStateToProps = state => ({...state});
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      immediatePrioity:[],
      highPrioity:[],
      mediumPrioity:[],
      lowPrioity:[],
      queueObject: '',
      selectedPrioity:'immediatePrioity',
      selectedQueue: '',
      chattingQueue: [],
      messages:''
    }
  }

  handlePrioitySelect = (prioity) => {
    this.setState({selectedPrioity:prioity})
  }

  handleChatClick = (queueId) => {
    let selectedQueue = this.handelQueueClick(queueId);
    this.setState({messages:{...this.state.messages,[queueId]:[]}});
    this.state.chattingQueue.push(selectedQueue);

    let prioityKey = this.state.selectedPrioity;
    let queueChanageArr = this.state[prioityKey].filter(queue => queue.id !== queueId );
    this.setState({[prioityKey]: queueChanageArr});
    this.socket.send(JSON.stringify(selectedQueue));
  }

  handelQueueClick = (queueId) => {
    for(let key in this.state.queueObject){
      if (queueId === key) {
        let selectedQueue = {
          ...this.state.queueObject[key],
          type: 'startChat', 
          id: key,
          counsellorName: 'Dan Karres'
        }
        this.setState({selectedQueue:selectedQueue});
        return (
          selectedQueue
        )
      }
    }
  }

  handleMessageSent = (id,message) => {
    this.state.messages[id].push(message);
  }

  // componentWillMount () {
  //   this.socket = new WebSocket('ws://localhost:3001');
  //   this.socket.onmessage = (data) => {
  //     const parsedData = JSON.parse(data.data);
  //     if (parsedData.queue){
  //       let {queue} = parsedData;
  //       let lowPrioityArr = [];
  //       let mediumPrioityArr = [];
  //       let highPrioityArr = [];
  //       let immediatePrioityArr = [];

  //       for(let key in queue){
  //         if (queue[key].severity >= 1 && queue[key].severity < 25){
  //           lowPrioityArr.push({...queue[key], id:key})
  //         }
  //         else if (queue[key].severity >= 25 && queue[key].severity < 50){
  //           mediumPrioityArr.push({...queue[key], id:key})
  //         }
  //         else if (queue[key].severity >= 50 && queue[key].severity < 75){
  //           highPrioityArr.push({...queue[key], id:key})
  //         }
  //         else if (queue[key].severity >= 75 && queue[key].severity <= 100){
  //           immediatePrioityArr.push({...queue[key], id:key})
  //         }
  //       }

  //       this.setState({
  //         immediatePrioity:immediatePrioityArr,
  //         highPrioity:highPrioityArr,
  //         mediumPrioity:mediumPrioityArr,
  //         lowPrioity:lowPrioityArr
  //       })

  //       this.setState({queueObject:queue});
  //     }
  //   }
  // }

  render() {
    const {isChatBoardShown} = this.props.showChatBoard;
    const chatBoardSpan = isChatBoardShown ? 5 : 1; 
    const messageSpan = isChatBoardShown ? 5 : 6;
    const groupedPrioity = {...this.props.queue.prioity};
    return (
      <Row className="App">
        <Col className="navbar" xs={0} sm={0} md={4} lg={4} xl={4}>
          <NavBar data={groupedPrioity} onClick={this.handlePrioitySelect}/>
        </Col>

        <Col className="queue" xs={0} sm={4} md={6} lg={messageSpan} xl={messageSpan}>
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
        </Col>  
      </Row>
    );
  }
}

export default connect(mapStateToProps, receiveQueue)(App);


