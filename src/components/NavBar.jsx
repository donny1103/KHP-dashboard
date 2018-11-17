import React, { Component } from 'react';
import { Button, Badge} from 'antd';
import 'antd/dist/antd.css';

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
          <Badge count={this.props.Data.immediatePrioity ? this.props.Data.immediatePrioity.length : 0}>
            Immediate Priority
          </Badge>
        </Button>
          
        <Button className="nav-button high-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D37B2CFF"}} value='2' onClick={this.onClick} >
        <Badge count={this.props.Data.highPrioity ? this.props.Data.highPrioity.length : 0}>
            High Priority
          </Badge>
        </Button>
        
        <Button className="nav-button medium-priority" style={{marginBottom: "1.5rem", backgroundColor: "#CBA745FF"}} value='3' onClick={this.onClick}>
        <Badge count={this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : 0}>
            Medium Priority
          </Badge>
        </Button>

        <Button className="nav-button low-priority" style={{backgroundColor: "#55AF39FF"}} value='4' onClick={this.onClick}>
        <Badge count={this.props.Data.lowPrioity ? this.props.Data.lowPrioity.length : 0}>
            Low Priority
          </Badge>
        </Button>
      </div>

    );
  }
  
}
export default NavBar;
