import React from 'react';
import { Card, Button, Collapse } from 'antd';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
              <img src="./img/boy.png" className="card-icon" /><span>{item.name}, {item.age} yrs old</span><br />
              <span>Severity: {item.severity}</span>
              <span className="wait-time">{Math.round((Date.parse(new Date()) - Date.parse(item.time))/60000)} mins ago</span>
            </div>
          } key={item.id} style={customPanelStyle}>
            <p>Test here</p>
            <Button type='primary' >End Session</Button>
            <Button type='primary' className="chat-button" value={item.name} onClick={clientName}>Chat ></Button>
          </Panel>
        </Collapse>
      ))}
    </div>
  )
};

export default Queue;