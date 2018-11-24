import React from 'react';
import { Slider, Button, Collapse, Col, Row, Progress } from 'antd';
const Panel = Collapse.Panel;

const QueuePanel = (props) => {

  let clientName = (e) => {
    props.clientName(e.target.value)
  }

  return(
    <Collapse bordered={false} defaultActiveKey={['1']} className="card" key={props.data.id}>
      <Panel 
        header={
          <Row type="flex" justify="center" align="middle" className="card-info">
            <Col sm={12} md={12} lg={6} xl={6}>
              {props.data.gender ? <img src={`./img/${props.data.gender}.png`} className="card-icon" /> :
                <img src={`./img/question.png`} className="card-icon" />}
            </Col>
            <Col sm={12} md={12} lg={{span:12, push:2}} xl={12} >
              <Row>
                {props.data.name}
              </Row>
              <Row> <span>Severity: {props.data.severity} </span></Row>
            </Col>
            <Col sm={0} md={0} lg={6} xl={6} className="wait-time">
              {
                Math.round((Date.parse(new Date()) - Date.parse(props.data.time))/60000)<60 ? 
                <span>{Math.round((Date.parse(new Date()) - Date.parse(props.data.time))/60000)} mins ago </span> :
                <span>{Math.round((Date.parse(new Date()) - Date.parse(props.data.time))/3600000)} hour ago</span>
              }
            </Col>
          </Row>
        } 
      key={props.data.id}
      showArrow={false} 
      >
        {props.data.age && <div className="card-titles">Age: {props.data.age} </div>}

        {
          props.data.favoriteColor && 
          <div>
           <b className="card-titles">
            <img src="./img/painting-palette.png" style={{width:'2vw'}}/>
            </b> 
            {props.data.favoriteColor}
          </div>
        }

        {
          props.data.sadValue && 
          <div>
            <b className="card-titles">Sad</b>
            <Progress percent={Math.round(props.data.sadValue/7 * 100)} status='active'/> 
            <Progress type="circle" percent={Math.round(props.data.sadValue/7 * 100)} status="active" />
          </div>
        }

        {
          props.data.scaredValue && 
          <div>
            <b className="card-titles">Scared</b> 
            <Progress  percent={Math.round(props.data.scaredValue/7 * 100)} status='active'/> 
            <Progress type="circle" percent={Math.round(props.data.scaredValue/7 * 100)} status="active" /> 
          </div> 
        }

        {
          props.data.careAbout && 
          <div><b className="card-titles">Care About</b></div>
        }

        <ul>
          {
            props.data.careAbout && props.data.careAbout.map(person=>(
              <li>{person}</li>
            ))
          }
        </ul>

        <Button type='primary' style={{backgroundColor: '#0b95c8'}}>End Session</Button>
        <Button 
          type='primary' 
          style={{backgroundColor: '#0b95c8'}} 
          className="chat-button" 
          value={JSON.stringify({type: 'startChat',clientName: props.data.name, id: props.data.id, counsellorName: 'Dan Karres'})} 
          onClick={clientName}>
          Chat>
        </Button>
      </Panel>
    </Collapse>
  )
}

export default QueuePanel;