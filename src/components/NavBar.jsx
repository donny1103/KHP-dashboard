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
   console.log(window.innerWidth)
 }

 render() {
    return (
      <Col className="navbar" xs={0} sm={0} md={2} lg={4} xl={4}>
        <div className="logo">
          <img src="./img/khp-name.png" className="khp-logo" />
        </div>

        <div className="counsellor-profile">
            <img src="./img/profile_img.png" className="profile-img" />
        </div>

        <div>
          <p className="counsellor-name">Dan Karres</p>
          <br />
        </div>

        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={this.onClick}>
            <Badge count={this.props.Data.immediatePrioity ? this.props.Data.immediatePrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
              <Row>
                <Col xs={0} sm={24} md={24} lg={12} xl={12}><strong style={{color:"#D23827FF"}}>1st</strong></Col>  
                <Col xs={0} sm={0} md={0} lg={12} xl={12}>Priority</Col>
              </Row>
            </Badge>
          </Menu.Item>
          <Menu.Item key="2" onClick={this.onClick}>
            <Badge count={this.props.Data.highPrioity ? this.props.Data.highPrioity.length : 0} style={{ backgroundColor: '#0b95c8'}}>
              <Row>
                <Col xs={0} sm={24} md={24} lg={12} xl={12}><strong style={{color:"#D37B2CFF"}}>2nd</strong></Col>  
                <Col xs={0} sm={0} md={0} lg={12} xl={12}>Priority</Col>
              </Row>
            </Badge>
          </Menu.Item>
          <Menu.Item key="3" onClick={this.onClick}>
            <Badge count={this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
              <Row>
                <Col xs={0} sm={24} md={24} lg={12} xl={12}><strong style={{color:"#CBA745FF"}}>3rd</strong></Col>  
                <Col xs={0} sm={0} md={0} lg={12} xl={12}>Priority</Col>
              </Row>
            </Badge>
          </Menu.Item>
          <Menu.Item key="4" onClick={this.onClick}>
            <Badge count={this.props.Data.mediumPrioity ? this.props.Data.mediumPrioity.length : 0} style={{ backgroundColor: '#0b95c8' }}>
              <Row>
                <Col xs={0} sm={24} md={24} lg={12} xl={12}><strong style={{color:"#55AF39FF"}}>4th</strong></Col>  
                <Col xs={0} sm={0} md={0} lg={12} xl={12}>Priority</Col>
              </Row>
            </Badge>
          </Menu.Item>
        </Menu>
      </Col>
   );
 }
}

export default NavBar;