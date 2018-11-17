import React from 'react';
import { Card, Button} from 'antd';

const Queue = (props) => {

  let sortedData = props.Data? props.Data.sort((a,b)=>(b.severity-a.severity)) : '';

  return (
    <div className="queue">
      {sortedData ? sortedData.map(item=>(
        <Button key={item.id} className="card">
            <img src="./img/boy.png" className="card-icon" /><span>{item.name}, {item.age} yrs old</span>
            <p className="card-content">Severity: {item.severity}</p>
        </Button>
      )) : ''}
    </div>
  )
};


export default Queue;