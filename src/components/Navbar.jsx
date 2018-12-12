import React from 'react';
import { Badge, Menu, Col, Row } from 'antd';
import NavbarCounselorInfo from './NavbarCounselorInfo';


const Navbar = ({ priority, onClick }) => {

  return (
    <>
      <NavbarCounselorInfo />
      <Menu mode="inline" defaultSelectedKeys={['immediate']} >

          <Menu.Item key="immediate" onClick={onClick}>
            <Row className="queue-priority" type="flex" justify="center">
              <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#D23827FF"}}>1st</strong></Col>  
              <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
              <Col xs={0} sm={0} md={4} lg={8} xl={8}>
                <Badge count={priority && priority.immediate.length ? priority.immediate.length : null} /> 
              </Col>
            </Row>
        </Menu.Item>

        <Menu.Item key="high" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#D37B2CFF"}}>2nd</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={priority && priority.high.length ? priority.high.length : null} />
            </Col>
          </Row>
        </Menu.Item>

        <Menu.Item key="medium" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#CBA745FF"}}>3rd</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
             <Badge count={priority && priority.medium.length ? priority.medium.length : null} />
            </Col>
          </Row>
        </Menu.Item>

        <Menu.Item key="low" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#55AF39FF"}}>4th</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
             <Badge count={priority && priority.low.length ? priority.low.length : null} />  
            </Col>
          </Row>            
        </Menu.Item>

      </Menu>
    </>
  );
}

export default Navbar;