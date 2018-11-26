import React from 'react';
import { Col } from 'antd';
import QueuePanel from './QueuePanel.jsx'

const Queue = (props) => {

  let sortedData = props.Data[props.showDataKey].sort((a,b)=>(b.severity-a.severity)) ;

  return (
    <Col className="queue" xs={0} sm={4} md={4} lg={8}>
      {sortedData.map(item=>(
          <QueuePanel data={item} startChat={props.startChat} key={item.id} isChatStart={props.isChatStart}/>
      ))}
    </Col>
  )
};

export default Queue;


// <i class="fas fa-ghost"></i>
// <i class="fas fa-frown"></i>