import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Badge } from 'antd';

class NavBar extends Component {
  constructor(props){
    super(props)

  }

  onClick = (e) => {
    this.props.onClick (e.target.value);
  }

  render() {
    return (
      <div className="navbar">

        <div className="counsellor-profile">
            <img src="./img/profile_img.png" className="profile-img" />
        </div>

        <Button className="nav-button immediate-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D23827FF"}} value='1' onClick={this.onClick}>
            Immediate Priority
            <Badge count={5} className="queue-badge" style={{ backgroundColor: '#0b95c8' }} />
        </Button>


        <Button className="nav-button high-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D37B2CFF"}} value='2' onClick={this.onClick} >
            High Priority
            <Badge count={5} className="queue-badge" style={{ backgroundColor: '#0b95c8' }}/>
        </Button>

        <Button className="nav-button medium-priority" style={{marginBottom: "1.5rem", backgroundColor: "#CBA745FF"}} value='3' onClick={this.onClick}>
            Medium Priority
            <Badge count={5} className="queue-badge" style={{ backgroundColor: '#0b95c8' }}/>
        </Button>

        <Button className="nav-button low-priority" style={{backgroundColor: "#55AF39FF"}} value='4' onClick={this.onClick}>
            Low Priority
            <Badge count={5} className="queue-badge" style={{ backgroundColor: '#0b95c8' }}/>
        </Button>
      </div>

    );

  }

}
export default NavBar;
