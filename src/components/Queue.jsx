import React from 'react';
import { Collapse, Col } from 'antd';
import './Queue.css';
import QueuePanel from './QueuePanel.jsx'
const Panel = Collapse.Panel;

const Queue = (props) => {

  let sortedData = props.Data[props.showDataKey].sort((a,b)=>(b.severity-a.severity)) ;

  return (
    <Col className="queue" xs={0} sm={4} md={4} lg={8}>
      {sortedData.map(item=>(
          <QueuePanel data={item} clientName={props.clientName} key={item.id}/>
      ))}
    </Col>
  )
};

export default Queue;


// <i class="fas fa-ghost"></i>
// <i class="fas fa-frown"></i>