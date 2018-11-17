import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat.jsx'

class App extends Component {
  state = {
    messages:['Hi, my name is AAA','How are you AAA?']
  }
  render() {
    return (
      <div className="App">
        <Chat Messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
