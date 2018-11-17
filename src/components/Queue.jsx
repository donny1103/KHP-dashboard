import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';

const Queue = (props) => {

  return (
    <div className="queue">
      {props.Data? props.Data.map(item=>(
        <Card key={item.id} className="card">
          <CardContent className="card-content">
            <img src="./img/boy.png" className="card-icon" /> <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Severity: {item.severity}</p>
          </CardContent>
        </Card>
      )) : ''}
    </div>
  )
};

export default Queue;