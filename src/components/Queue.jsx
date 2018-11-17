import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';

const Queue = (props) => {
  
  return (
    <div className="queue">
      {props.Data? props.Data.map(item=>(
        <Card key={item.id} >
          <CardContent>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Severity: {item.severity}</p>
          </CardContent>
        </Card>
      )) : ''}
    </div>
  )
};

export default Queue;