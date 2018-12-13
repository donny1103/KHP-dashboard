import React from 'react';
import { Col, Row, Progress } from 'antd';

const ChatBoardPanelInfo = ({ client }) => (
  <Row className="personal-info">
    {
      client.age && 
      <Col className="info-item" >
        <b className="item-titles">Severity: </b>
         {client.severity}
      </Col> 
    }

    {
      client.age && 
      <Col className="info-item" >
        <b className="item-titles">Age: </b>
        {client.age}
      </Col> 
    }

    {
      client.favoriteColor && 
      <Col className="info-item" >
        <b className="item-titles">Color: </b>
        {client.favoriteColor}
      </Col>
    }

    {
      client.sadValue && 
      <Col className="info-item" xs={0} sm={0} md={24} lg={24} xl={24}>
        <b className="item-titles">Sad </b>
        <Progress percent={Math.round(client.sadValue/7 * 100)} status='active'/> 
      </Col>
    }

    {
      client.sadValue && 
      <Col className="info-item" xs={24} sm={24} md={0} lg={0} xl={0}>
        <b className="item-titles">Sad: </b>
        {client.sadValue}<span>/7</span> 
      </Col>
    }

    {
      client.scaredValue && 
      <Col className="info-item" xs={0} sm={0} md={24} lg={24} xl={24}>
        <b className="item-titles">Scared</b> 
        <Progress  percent={Math.round(client.scaredValue/7 * 100)} status='active'/> 
      </Col> 
    }

    {
      client.sadValue && 
      <Col className="info-item" xs={24} sm={24} md={0} lg={0} xl={0}>
        <b className="item-titles">Scared: </b>
        {client.scaredValue}<span>/7</span> 
      </Col>
    }

    {
      client.careAbout && 
      <Col className="info-item" xs={0} sm={0} md={24} lg={24} xl={24}>
        <b className="item-titles">Care About</b>
      </Col>
    }
    <ul>
      {
        client.careAbout && client.careAbout.map(person=>(
          <li>{person}</li>
        ))
      }
    </ul>
  </Row>
)

export default ChatBoardPanelInfo;