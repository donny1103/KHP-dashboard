import React from 'react';
import { Col } from 'antd';
import QueuePanel from './QueuePanel.jsx'

const Queue = (props) => {

  let sortedData = props.Data[props.showDataKey].sort((a,b)=>(b.severity-a.severity)) ;

  return (
    <Col className="queue" xs={0} sm={4} md={8} lg={8}>
      {sortedData.map(item=>(
          <QueuePanel 
            key={item.id} 
            data={item} 
            startChat={props.startChat} 
            onPanelClick={props.onPanelClick}/>
      ))}
    </Col>
  )
};

export default Queue;