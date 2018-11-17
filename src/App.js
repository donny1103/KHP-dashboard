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
      queueData:''
    }
  }

  componentDidMount () {
    // setInterval(()=>{      
    //   axios.get('http://localhost:9000/pendinguser')
    //   .then(data=>{
    //     this.setState({queueData:data.data}
    //       )
    // })}, 5000);

    axios.get('http://localhost:9000/pendinguser')
    .then(data=>{
    this.setState({queueData:data.data})})
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <Queue />
          <Chat />
      </div>
    );
  }
}

export default App;


