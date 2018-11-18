import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Queue from './components/Queue.jsx';
import Chat from './components/Chat.jsx'

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
      clientName: ''
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

  handleChatClick = (val) => {
    this.setState({clientName:val})
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
        // let toQueueData=this.state.immediatePrioity;
        // this.setState({toQueueData:toQueueData});
      }
    }
  }

  render() {
    return (
      <div className="App">
          <NavBar Data={this.state} onClick={this.handlePrioityClick}/>
          <Queue 
            Data={this.state}
            showDataKey={this.state.toQueueData} 
            clientName={this.handleChatClick}
          />
          <Chat clientName={this.state.clientName}/>
      </div>
    );
  }
}

export default App;


