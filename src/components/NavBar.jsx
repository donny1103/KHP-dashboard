import React, { Component } from 'react';
import { Badge, Menu, Col, Row} from 'antd';
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
   const badgeStyle = { backgroundColor: '#0b95c8' };
    return (
      <Col className="navbar" xs={0} sm={0} md={3} lg={4}>
        <div className="logo">
          <img src="./img/khp-name.png" className="khp-logo" />
        </div>

        <div className="counsellor-profile">
            <img src="./img/profile_img.png" className="profile-img" />
        </div>

        <div>
          <p className="counsellor-name">Dan Karres</p>
        </div>

        <Menu mode="inline" defaultSelectedKeys={['1']} >

            <Menu.Item key="1" onClick={this.onClick}>
              <Row className="queue-priority" type="flex" justify="center">
                <Col md={10} lg={6} xl={6}><strong style={{color:"#D23827FF"}}>1st</strong></Col>  
                <Col md={0} lg={10} xl={10}>Priority</Col>
                <Col md={4} lg={8} xl={8}>
                  {this.props.Data.immediatePrioity ? this.props.Data.immediatePrioity.length : null} 
                </Col>
              </Row>
          </Menu.Item>

          <Menu.Item key="2" onClick={this.onClick}>
            <Row className="queue-priority" type="flex" justify="center">
              <Col md={10} lg={6} xl={6}><strong style={{color:"#D37B2CFF"}}>2nd</strong></Col>  
              <Col md={0} lg={10} xl={10}>Priority</Col>
              <Col md={4} lg={8} xl={8}>
                {this.props.Data.highPrioity ? this.props.Data.highPrioity.length : null}
              </Col>
            </Row>
          </Menu.Item>

          <Menu.Item key="3" onClick={this.onClick}>
            <Row className="queue-priority" type="flex" justify="center">
              <Col md={10} lg={6} xl={6}><strong style={{color:"#CBA745FF"}}>3rd</strong></Col>  
              <Col md={0} lg={10} xl={10}>Priority</Col>
              <Col md={4} lg={8} xl={8}>
              {this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : null}
              </Col>
            </Row>
          </Menu.Item>

          <Menu.Item key="4" onClick={this.onClick}>
            <Row className="queue-priority" type="flex" justify="center">
              <Col md={10} lg={6} xl={6}><strong style={{color:"#55AF39FF"}}>4th</strong></Col>  
              <Col md={0} lg={10} xl={10}>Priority</Col>
              <Col md={4} lg={8} xl={8}>
                {this.props.Data.lowPrioity ? this.props.Data.lowPrioity.length : null}  
              </Col>
            </Row>            
          </Menu.Item>

        </Menu>
      </Col>
   );
 }
}

export default NavBar;