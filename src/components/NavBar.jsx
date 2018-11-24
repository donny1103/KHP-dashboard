import React, { Component } from 'react';
import { Button, Badge, Menu, Col} from 'antd';
import 'antd/dist/antd.css';
import './NavBar.css';
class NavBar extends Component {
 constructor(props){
   super(props)

 }

 onClick = (e) => {
   this.props.onClick (e.key);
 }

 render() {
   return (
     <Col className="navbar" xs={0} sm={2} md={2} lg={4} xl={4}>
      <div className="logo">
        <img src="./img/khp.png" className="khp-logo" />
      </div>

      <div className="counsellor-profile">
          <img src="./img/profile_img.png" className="profile-img" />
      </div>

      <div>
        <p className="counsellor-name">Logged in as:</p>
        <p className="counsellor-name">Dan Karres</p>
        <br />
      </div>
       {/* <Button className="nav-button immediate-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D23827FF"}} value='1' onClick={this.onClick}>
          Immediate Priority
          <Badge count={this.props.Data.immediatePrioity ? this.props.Data.immediatePrioity.length : 0} className="queue-badge" style={{ backgroundColor: '#0b95c8' }} />
       </Button>

       <Button className="nav-button high-priority" style={{marginBottom: "1.5rem", backgroundColor: "#D37B2CFF"}} value='2' onClick={this.onClick} >
          High Priority
          <Badge count={this.props.Data.highPrioity ? this.props.Data.highPrioity.length : 0} className="queue-badge" style={{ backgroundColor: '#0b95c8' }} />
       </Button>

       <Button className="nav-button medium-priority" style={{marginBottom: "1.5rem", backgroundColor: "#CBA745FF"}} value='3' onClick={this.onClick}>
          Medium Priority
          <Badge count={this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : 0} className="queue-badge" style={{ backgroundColor: '#0b95c8' }} />
       </Button>

       <Button className="nav-button low-priority" style={{backgroundColor: "#55AF39FF"}} value='4' onClick={this.onClick}>
          Low Priority
          <Badge count={this.props.Data.lowPrioity ? this.props.Data.lowPrioity.length : 0} className="queue-badge" style={{ backgroundColor: '#0b95c8' }} />
       </Button> */}

        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={this.onClick}>
            <Badge count={this.props.Data.immediatePrioity ? this.props.Data.immediatePrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
            <span> <strong style={{color: "#D23827FF"}}>1st</strong> Priority</span>
            </Badge>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.onClick}>
            <Badge count={this.props.Data.highPrioity ? this.props.Data.highPrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
            <span><strong style={{color: "#D37B2CFF"}}>2nd</strong>  Priority</span>
            </Badge>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.onClick}>
            <Badge count={this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
            <span><strong style={{color: "#CBA745FF"}}>3rd</strong>  Priority</span>
            </Badge>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.onClick}>
            <Badge count={this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
            <span><strong style={{color: "#55AF39FF"}}>4th</strong>  Priority</span>
            </Badge>
          </Menu.Item>
        </Menu>
     </Col>

   );
 }
}

export default NavBar;