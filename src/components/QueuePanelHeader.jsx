import React from 'react';
import { Row, Col } from 'antd'; 
import moment from 'moment';

const QueuePanelHeader = ({ client }) => (
  <Row type="flex" justify="center" align="middle" className="card-info">
    <Col xs={0} sm={0} md={6} lg={6} xl={6}>
      {client.gender ? <img alt="gender" src={`./img/${client.gender}.png`} className="card-icon" /> :
        <img alt="gender" src={`./img/question.png`} className="card-icon" />}
    </Col>
    <Col xs={0} sm={0} md={10} lg={10} xl={10} >
      <Row>
        {client.name}
      </Row>
      <Row> <span>Severity: {client.severity} </span></Row>
    </Col>
    <Col className="card-info" xs={0} sm={0} md={8} lg={8} xl={8}>
      <span>{moment(client.time).fromNow()}</span>
    </Col>
    <Col xs={0} sm={24} md={0} lg={0} xl={0}>
      <Row type="flex" className="card-info">
        <p className="header-mobile">{client.name}  Severity: {client.severity}</p>  
      </Row>
      <Row type="flex" className="card-info">
        <p className="header-mobile">{moment(client.time).fromNow()}</p>
      </Row>
    </Col>
  </Row>  
)

export default QueuePanelHeader;