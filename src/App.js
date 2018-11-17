import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';

class App extends Component {



// loads the different priority information
  handleNavBarClick = (priority) => {
      // const newUsername = {
      //     name: newName
      // };
      // const oldName = this.state.currentUser.name;
      // const nameNotification = {
      //     type: "postNotification",
      //     content: `${oldName} changed their name to ${newUsername.name}`
      }
      this.setState({ priorityList: newUsername });
      // this.socket.send(JSON.stringify(nameNotification));

  };

  render() {
    return (
      <div className="App">
          <NavBar />


      </div>
    );
  }
}

export default App;


