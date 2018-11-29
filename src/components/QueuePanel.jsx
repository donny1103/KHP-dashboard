import React from 'react';
import { Button, Collapse, Col, Row, Progress } from 'antd';
import moment from 'moment';
const Panel = Collapse.Panel;

const QueuePanel = (props) => {

  const generateStartChatFunction = (id) => () => {
    props.startChat(id)
  }

  return(
    <Collapse 
      bordered={true}  
      className="card" key={props.data.id}
      style={{backgroundColor:'white'}}
    >
      <Panel 
        header={
          <Row type="flex" justify="center" align="middle" className="card-info">
            <Col xs={0} sm={0} md={6} lg={6} xl={6}>
              {props.data.gender ? <img alt="gender" src={`./img/${props.data.gender}.png`} className="card-icon" /> :
                <img alt="gender" src={`./img/question.png`} className="card-icon" />}
            </Col>
            <Col xs={0} sm={0} md={10} lg={10} xl={10} >
              <Row>
                {props.data.name}
              </Row>
              <Row> <span>Severity: {props.data.severity} </span></Row>
            </Col>
            <Col className="card-info" xs={0} sm={0} md={8} lg={8} xl={8}>
              <span>{moment(props.data.time).fromNow()}</span>
            </Col>
            <Col xs={0} sm={24} md={0} lg={0} xl={0}>
              <Row type="flex" className="card-info">
                <p className="header-mobile">{props.data.name}  Severity: {props.data.severity}</p>  
              </Row>
              <Row type="flex" className="card-info">
                <p className="header-mobile">{moment(props.data.time).fromNow()}</p>
              </Row>
            </Col>
          </Row>
        } 
      key={props.data.id}
      showArrow={false} 
      >
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
          <Button 
            type='primary'     
            className="chat-button" 
            value={props.data.id} 
            onClick={generateStartChatFunction(props.data.id)}>
            <b>Chat ></b>
          </Button>
        </Row>
      </Panel>
    </Collapse>
  )
}

export default QueuePanel;