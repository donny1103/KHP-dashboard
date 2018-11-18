import React from 'react';
import { Slider, Button, Collapse } from 'antd';
import { Rate, Icon } from 'antd';

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
    <div className="queue">
      {sortedData.map(item=>(
        <Collapse bordered={false} defaultActiveKey={['1']} className="card">
          <Panel header={
            <div>
              {item.gender ? <img src={`./img/${item.gender}.png`} className="card-icon" /> :
                <img src={`./img/question.png`} className="card-icon" />}
              <span>{item.name}, {item.age} yrs old</span><br />
              <span>Severity: {item.severity}</span>
              <span className="wait-time">{Math.round((Date.parse(new Date()) - Date.parse(item.time))/60000)} mins ago</span>
            </div>
          } key={item.id} style={customPanelStyle}>
            <p>favorite color: {item.favoriteColor}</p>
            <p>Sad <Slider defaultValue={item.sadValue} min={0} max={7} marks={{0:'1', 7: '7'}} disabled={true} className="slider"/> </p>
            <i class="fas fa-ghost"></i>
            <p>Scared <Slider defaultValue={item.scaredValue} min={0} max={7} marks={{0:'1', 7: '7'}} disabled={true} className="slider"/> </p>
            <i class="fas fa-frown"></i>
            <p>Care About</p>
            <ul>
              {item.careAbout && item.careAbout.map(person=>(
                <li>{person}</li>
              ))}
            </ul>

            <Button type='primary' style={{backgroundColor: '#0b95c8'}}>End Session</Button>
            <Button type='primary' className="chat-button" value={item.name} onClick={clientName} style={{backgroundColor: '#0b95c8'}}>Chat ></Button>
          </Panel>
        </Collapse>
      ))}
    </div>
  )
};

export default Queue;