import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar.jsx';
import Queue from './components/Queue.jsx';
import Chat from './components/Chat.jsx'
import { Row } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueObject:'',
      immediatePrioity:[],
      highPrioity:[],
      mediumPrioity:[],
      lowPrioity:[],
      toQueueData:'immediatePrioity',
      clientName: '',
      isChatStart:false,
      selectedQueue:''
    }
  }

  handlePrioitySelect = (val) => {
    let toQueueData;
    if (val === '1'){
      toQueueData = 'immediatePrioity';
    }
    else if (val === '2'){
      toQueueData = 'highPrioity';
    }
    else if (val === '3'){
      toQueueData = 'mediumPrioity';
    }
    else if (val === '4'){
      toQueueData = 'lowPrioity';
    }
    this.setState({toQueueData:toQueueData})
  }

  handlePanelSelect = (key) => {
    for(let objKey in this.state.queueObject){
      if (key[0] === objKey) {
        let selectedQueue = this.state.queueObject[objKey];
        this.setState({selectedQueue:selectedQueue});
      }
    }
  }

  handleChatClick = (queueId) => {
    console.log(queueId)
    for(let key in this.state.queueObject){
      if (queueId === key) {
        let selectedQueue = this.state.queueObject[key];
        this.setState({selectedQueue:{...selectedQueue,type: 'startChat', id: key, clientName: selectedQueue.name,counsellorName: 'Dan Karres'}, clientName: selectedQueue.name});
      }
    }
    // this.socket.send(this.state.selectedQueue);
  }

  componentDidMount () {

    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onmessage = (data) => {
      const parsedData = JSON.parse(data.data);
      if (parsedData.queue){
        let {queue} = parsedData;
        let lowPrioityArr = [];
        let mediumPrioityArr = [];
        let highPrioityArr = [];
        let immediatePrioityArr = [];

        for(let key in queue){
          if (queue[key].severity >= 1 && queue[key].severity < 25){
            lowPrioityArr.push({...queue[key], id:key})
          }
          else if (queue[key].severity >= 25 && queue[key].severity < 50){
            mediumPrioityArr.push({...queue[key], id:key})
          }
          else if (queue[key].severity >= 50 && queue[key].severity < 75){
            highPrioityArr.push({...queue[key], id:key})
          }
          else if (queue[key].severity >= 75 && queue[key].severity <= 100){
            immediatePrioityArr.push({...queue[key], id:key})
          }
        }
        this.setState({
          immediatePrioity:immediatePrioityArr,
          highPrioity:highPrioityArr,
          mediumPrioity:mediumPrioityArr,
          lowPrioity:lowPrioityArr
        })

        this.setState({queueObject:queue});
      }
    }
  }

  render() {
    return (
      <Row className="App">
          <NavBar Data={this.state} onClick={this.handlePrioitySelect}/>
          <Queue 
            Data={this.state}
            showDataKey={this.state.toQueueData} 
            startChat={this.handleChatClick}
            onPanelClick={this.handlePanelSelect}
          />
          <Chat clientName={this.state.clientName}/>
      </Row>
    );
  }
}

export default App;


