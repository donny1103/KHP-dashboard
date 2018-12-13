import React from 'react';
import { Col, Row, Progress } from 'antd';
import uuidv4 from 'uuid/v4';

const QueuePanelInfo = ({ client }) => (
  <Row className="personal-info">
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
          <li key={uuidv4()}>{person}</li>
        ))
      }
    </ul>
  </Row>
)

export default QueuePanelInfo;