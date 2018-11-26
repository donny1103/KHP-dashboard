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
      queueData:'',
      immediatePrioity:[],
      highPrioity:[],
      mediumPrioity:[],
      lowPrioity:[],
      toQueueData:'immediatePrioity',
      clientName: '',
      isChatStart:false
    }
  }

  handlePrioityClick = (val) => {
    let toQueueData;
    if (val === '1'){
      toQueueData = 'immediatePrioity';
    }
    if (val === '2'){
      toQueueData = 'highPrioity';
    }
    if (val === '3'){
      toQueueData = 'mediumPrioity';
    }
    if (val === '4'){
      toQueueData = 'lowPrioity';
    }
    this.setState({toQueueData:toQueueData})
  }

  handleChatClick = (value) => {
    let parsedVal = JSON.parse(value);
    this.setState({clientName:parsedVal.clientName, isChatStart:true});
    this.socket.send(value);
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
          if (queue[key].severity >= 25 && queue[key].severity < 50){
            mediumPrioityArr.push({...queue[key], id:key})
          }
          if (queue[key].severity >= 50 && queue[key].severity < 75){
            highPrioityArr.push({...queue[key], id:key})
          }
          if (queue[key].severity >= 75 && queue[key].severity <= 100){
            immediatePrioityArr.push({...queue[key], id:key})
          }
        }
        this.setState({
          immediatePrioity:immediatePrioityArr,
          highPrioity:highPrioityArr,
          mediumPrioity:mediumPrioityArr,
          lowPrioity:lowPrioityArr
        })

        this.setState({queueData:queue});
      }
    }
  }

  render() {
    return (
      <Row className="App">
          <NavBar Data={this.state} onClick={this.handlePrioityClick}/>
          <Queue 
            Data={this.state}
            showDataKey={this.state.toQueueData} 
            startChat={this.handleChatClick}
            isChatStart={this.state.isChatStart}
          />
          <Chat clientName={this.state.clientName}/>
      </Row>
    );
  }
}

export default App;


