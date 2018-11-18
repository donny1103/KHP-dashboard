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
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};



const Queue = (props) => {

  let sortedData = props.Data? props.Data.sort((a,b)=>(b.severity-a.severity)) : '';

  return (
    <div className="queue">
      {sortedData ? sortedData.map(item=>(
        // <Button key={item.id} className="card">
        //     <img src="./img/boy.png" className="card-icon" /><span>{item.name}, {item.age} yrs old</span><br />
        //     <span>Severity: {item.severity}</span>
        //     <span className="wait-time">02:15</span>
        // </Button>

        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header={
            <div>
              <img src="./img/boy.png" className="card-icon" /><span>{item.name}, {item.age} yrs old</span><br />
              <span>Severity: {item.severity}</span>
              <span className="wait-time">02:15</span>
            </div>
          } key={item.id} style={customPanelStyle}>
            <p>Test here</p>
          </Panel>

        </Collapse>

      )) : ''}
    </div>
  )
};


export default Queue;