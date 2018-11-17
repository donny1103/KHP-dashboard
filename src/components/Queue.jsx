import React from 'react';
import { Card } from 'antd';

const Queue = (props) => {

  let sortedData = props.Data? props.Data.sort((a,b)=>(b.severity-a.severity)) : '';

  return (
    <div className="queue">
      {sortedData ? sortedData.map(item=>(
        <Card key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Severity: {item.severity}</p>
        </Card>
      )) : ''}
    </div>
  )
};


export default Queue;