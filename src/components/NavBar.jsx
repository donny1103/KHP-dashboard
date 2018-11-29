import React from 'react';
import { Badge, Menu, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const NavBar = (props) => {

  const onClick = (e) => {
    props.onClick (e.key);
  }
  // const badgeStyle = { backgroundColor: '#0b95c8' };
  return (
    <Col className="navbar" xs={0} sm={0} md={3} lg={4}>
      <div className="logo">
        <img alt="logo" src="./img/khp-name.png" className="khp-logo" />
      </div>

      <div className="counsellor-profile">
          <img alt="counsellor" src="./img/profile_img.png" className="profile-img" />
      </div>

      <div>
        <p className="counsellor-name">Dan Karres</p>
      </div>

      <Menu mode="inline" defaultSelectedKeys={['1']} >

          <Menu.Item key="1" onClick={onClick}>
            <Row className="queue-priority" type="flex" justify="center">
              <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#D23827FF"}}>1st</strong></Col>  
              <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
              <Col xs={0} sm={0} md={4} lg={8} xl={8}>
                <Badge count={props.Data.immediatePrioity ? props.Data.immediatePrioity.length : null} /> 
              </Col>
            </Row>
        </Menu.Item>

        <Menu.Item key="2" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#D37B2CFF"}}>2nd</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={props.Data.highPrioity ? props.Data.highPrioity.length : null} /> 
            </Col>
          </Row>
        </Menu.Item>

        <Menu.Item key="3" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#CBA745FF"}}>3rd</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={props.Data.mediumPrioity ? props.Data.mediumPrioity.length : null} />
            </Col>
          </Row>
        </Menu.Item>

        <Menu.Item key="4" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#55AF39FF"}}>4th</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={props.Data.lowPrioity ? props.Data.lowPrioity.length : null} />
            </Col>
          </Row>            
        </Menu.Item>

      </Menu>
    </Col>
  );
}

export default NavBar;