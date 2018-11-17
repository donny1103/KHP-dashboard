import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';

const Queue = (props) => {
  
  return (
    <div className="queue">
      {props.Data? props.Data.map(item=>(
        <Card key={item.id} >
          <CardContent>
            {item.severity}
          </CardContent>
        </Card>
      )) : ''}
    </div>
  )
};

export default Queue;