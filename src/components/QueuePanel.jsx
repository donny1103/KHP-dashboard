import React from 'react';
import { Button, Collapse, Col, Row, Progress } from 'antd';
import moment from 'moment';
const Panel = Collapse.Panel;

const QueuePanel = (props) => {

  const startChat = (e) => {
    console.log(e.target.value)
    props.startChat(e.target.value)
  }
  
  const onPanelClick = (key) => {
    props.onPanelClick(key)
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
            <Col sm={12} md={12} lg={6} xl={6}>
              {props.data.gender ? <img alt="gender" src={`./img/${props.data.gender}.png`} className="card-icon" /> :
                <img alt="gender" src={`./img/question.png`} className="card-icon" />}
            </Col>
            <Col sm={12} md={12} lg={10} xl={10} >
              <Row>
                {props.data.name}
              </Row>
              <Row> <span>Severity: {props.data.severity} </span></Row>
            </Col>
            <Col sm={0} md={0} lg={8} xl={8} className="wait-time">
              <span>{moment(props.data.time).fromNow()}</span>
            </Col>
          </Row>
        } 
      key={props.data.id}
      showArrow={false} 
      >
        <div className="personal-info">
          {
            props.data.age && 
          <div className="info-item">
            <b className="item-titles">Age: </b>
            {props.data.age}
          </div> 
          }

          {
            props.data.favoriteColor && 
            <div className="info-item">
              <b className="item-titles">Color: </b>
              {props.data.favoriteColor}
            </div>
          }

          {
            props.data.sadValue && 
            <div className="info-item">
              <b className="item-titles">Sad </b>
              <Progress percent={Math.round(props.data.sadValue/7 * 100)} status='active'/> 
            </div>
          }

          {
            props.data.scaredValue && 
            <div className="info-item">
              <b className="item-titles">Scared</b> 
              <Progress  percent={Math.round(props.data.scaredValue/7 * 100)} status='active'/> 
            </div> 
          }

          {
            props.data.careAbout && 
            <div className="info-item"><b className="item-titles">Care About</b></div>
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
            onClick={startChat}>
            <b>Chat ></b>
          </Button>
        </div>
      </Panel>
    </Collapse>
  )
}

export default QueuePanel;