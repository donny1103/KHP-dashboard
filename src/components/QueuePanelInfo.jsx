import React from 'react';
import { Col, Row, Progress } from 'antd';

const QueuePanelInfo = (props) => (
  <Row className="personal-info">
    {
      props.data.age && 
      <Col className="info-item" >
        <b className="item-titles">Age: </b>
        {props.data.age}
      </Col> 
    }

    {
      props.data.favoriteColor && 
      <Col className="info-item" >
        <b className="item-titles">Color: </b>
        {props.data.favoriteColor}
      </Col>
    }

    {
      props.data.sadValue && 
      <Col className="info-item" xs={0} sm={0} md={24} lg={24} xl={24}>
        <b className="item-titles">Sad </b>
        <Progress percent={Math.round(props.data.sadValue/7 * 100)} status='active'/> 
      </Col>
    }

    {
      props.data.sadValue && 
      <Col className="info-item" xs={24} sm={24} md={0} lg={0} xl={0}>
        <b className="item-titles">Sad: </b>
        {props.data.sadValue}<span>/7</span> 
      </Col>
    }

    {
      props.data.scaredValue && 
      <Col className="info-item" xs={0} sm={0} md={24} lg={24} xl={24}>
        <b className="item-titles">Scared</b> 
        <Progress  percent={Math.round(props.data.scaredValue/7 * 100)} status='active'/> 
      </Col> 
    }

    {
      props.data.sadValue && 
      <Col className="info-item" xs={24} sm={24} md={0} lg={0} xl={0}>
        <b className="item-titles">Scared: </b>
        {props.data.scaredValue}<span>/7</span> 
      </Col>
    }

    {
      props.data.careAbout && 
      <Col className="info-item" xs={0} sm={0} md={24} lg={24} xl={24}>
        <b className="item-titles">Care About</b>
      </Col>
    }
    <ul>
      {
        props.data.careAbout && props.data.careAbout.map(person=>(
          <li>{person}</li>
        ))
      }
    </ul>
  </Row>
)

export default QueuePanelInfo;