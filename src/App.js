import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Queue from './components/Queue.jsx';
import Chat from './components/Chat.jsx'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueData:'',
      immediatePrioity:[],
      highPrioity:[],
      mediumPrioity:[],
      lowPrioity:[],
      toQueueData:''
    }
  }

  handlePrioityClick = () => {

  }
  componentDidMount () {
    // setInterval(()=>{      
    //   axios.get('http://localhost:9000/pendingusers')
    //   .then(data=>{
    //     this.setState({queueData:data.data}
    //       )
    // })}, 5000);

    axios.get('http://localhost:9000/pendingusers')
    .then(queue=>{
      for(let key in queue.data){
        if (queue.data[key].severity >= 1 && queue.data[key].severity < 25){
          this.state.lowPrioity.push({...queue.data[key], id:key})
        }
        if (queue.data[key].severity >= 25 && queue.data[key].severity < 50){
          this.state.mediumPrioity.push({...queue.data[key], id:key})
        }
        if (queue.data[key].severity >= 50 && queue.data[key].severity < 75){
          this.state.highPrioity.push({...queue.data[key], id:key})
        }
        if (queue.data[key].severity >= 75 && queue.data[key].severity <= 100){
          this.state.immediatePrioity.push({...queue.data[key], id:key})
        }
      }
      this.setState({queueData:queue.data});
      let toQueueData=this.state.immediatePrioity;
      this.setState({toQueueData:toQueueData});
    })
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <Queue Data={this.state.toQueueData}/>
          <Chat />
      </div>
    );
  }
}

export default App;


