import React from 'react';
import QueuePanel from './QueuePanel.jsx'

const Queue = (props) => {
  let sortedData = props.data && Object.keys(props.data).length && props.data[props.activePrioity].sort((a,b)=>(b.severity-a.severity)) ;

  return (
    <>
      { props.data && Object.keys(props.data).length ?
        sortedData.map(item=>(
          <QueuePanel 
            key={item.id} 
            data={item} 
            onPanelClick={props.onPanelClick}
          />
        )) : null
      }
    </>
  )
};

export default Queue;