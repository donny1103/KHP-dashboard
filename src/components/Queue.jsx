import React from 'react';
import { Slider, Button, Collapse } from 'antd';
import { Col } from 'antd';
import './Queue.css';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#fff',
  borderRadius: 4,
  marginBottom: 10,
  border: 0,
  overflow: 'hidden',
};


const Queue = (props) => {

  let sortedData = props.Data[props.showDataKey].sort((a,b)=>(b.severity-a.severity)) ;

  let clientName = (e) => {
    props.clientName(e.target.value)
  }

  return (
    <Col className="queue" xs={0} sm={4} md={4} lg={8} xl={8} >
      {sortedData.map(item=>(
        <Collapse bordered={false} defaultActiveKey={['1']} className="card" key={item.id}>
          <Panel header={
            <div>
              {item.gender ? <img src={`./img/${item.gender}.png`} className="card-icon" /> :
                <img src={`./img/question.png`} className="card-icon" />}
              <span className="text-font">{item.name}, {item.age} yrs old</span><br />
              <span className="text-font">Severity: {item.severity}</span>
              <span className="wait-time text-font">{Math.round((Date.parse(new Date()) - Date.parse(item.time))/60000)} mins ago</span>
            </div>
          } key={item.id} style={customPanelStyle}>

            {item.favoriteColor && <div><b className="card-titles">Favorite color:</b> {item.favoriteColor}</div>}
            {item.sadValue && <div><b className="card-titles">Sad</b> <Slider defaultValue={item.sadValue} min={0} max={7} marks={{0:'1', 7: '7'}} disabled={true} className="slider"/> </div>}
            {item.scaredValue && <div><b className="card-titles">Scared</b> <Slider defaultValue={item.scaredValue} min={0} max={7} marks={{0:'1', 7: '7'}} disabled={true} className="slider"/> </div> }
              {item.careAbout && <div><b className="card-titles">Care About</b></div>}
              <ul>
                {item.careAbout && item.careAbout.map(person=>(
                  <li>{person}</li>
                ))}
              </ul>
            <Button type='primary' style={{backgroundColor: '#0b95c8'}}>End Session</Button>
            <Button type='primary' style={{backgroundColor: '#0b95c8'}} className="chat-button" value={JSON.stringify({type: 'startChat',clientName: item.name, id: item.id, counsellorName: 'Dan Karres'})} onClick={clientName}>Chat ></Button>
          </Panel>
        </Collapse>
      ))}
    </Col>
  )
};

export default Queue;


// <i class="fas fa-ghost"></i>
// <i class="fas fa-frown"></i>