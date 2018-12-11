import React from 'react';
import { Badge, Menu, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import activePrioity from '../redux/actions/activePrioity';

const mapDispatchToProps = dispatch => ({
  onPrioityClick: (e) => (dispatch(activePrioity(e.key)))
});

const NavBar = (props) => {

  const onClick = (e) => {
    props.onPrioityClick(e);
    props.onClick (e.key);
  }

  return (
    <>
      <div className="logo">
        <img alt="logo" src="./img/khp-name.png" className="khp-logo" />
      </div>

      <div className="counsellor-profile">
          <img alt="counsellor" src="./img/profile_img.png" className="profile-img" />
      </div>

      <div>
        <p className="counsellor-name">Dan Karres</p>
      </div>

      <Menu mode="inline" defaultSelectedKeys={['immediatePrioity']} >

          <Menu.Item key="immediatePrioity" onClick={onClick}>
            <Row className="queue-priority" type="flex" justify="center">
              <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#D23827FF"}}>1st</strong></Col>  
              <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
              <Col xs={0} sm={0} md={4} lg={8} xl={8}>
                <Badge count={props.data.immediatePrioity ? props.data.immediatePrioity.length : null} /> 
              </Col>
            </Row>
        </Menu.Item>

        <Menu.Item key="highPrioity" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#D37B2CFF"}}>2nd</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={props.data.highPrioity ? props.data.highPrioity.length : null} /> 
            </Col>
          </Row>
        </Menu.Item>

        <Menu.Item key="mediumPrioity" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#CBA745FF"}}>3rd</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={props.data.mediumPrioity ? props.data.mediumPrioity.length : null} />
            </Col>
          </Row>
        </Menu.Item>

        <Menu.Item key="lowPrioity" onClick={onClick}>
          <Row className="queue-priority" type="flex" justify="center">
            <Col xs={0} sm={0} md={{span:10, push:2}} lg={6} xl={6}><strong style={{color:"#55AF39FF"}}>4th</strong></Col>  
            <Col xs={0} sm={0} md={0} lg={10} xl={10}>Priority</Col>
            <Col xs={0} sm={0} md={4} lg={8} xl={8}>
              <Badge count={props.data.lowPrioity ? props.data.lowPrioity.length : null} />
            </Col>
          </Row>            
        </Menu.Item>

      </Menu>
    </>
  );
}

export default connect(null, mapDispatchToProps)(NavBar);