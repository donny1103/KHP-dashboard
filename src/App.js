import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Chat from './components/Chat.jsx'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <Chat />
      </div>
    );
  }
}

export default App;


