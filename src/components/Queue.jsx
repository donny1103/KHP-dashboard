import React from 'react';
import QueuePanel from './QueuePanel.jsx'

const Queue = (props) => {

  let sortedData = props.Data[props.selectedPrioity].sort((a,b)=>(b.severity-a.severity)) ;

  return (
    <>
      {
        sortedData.map(item=>(
          <QueuePanel 
            key={item.id} 
            data={item} 
            startChat={props.startChat} 
            onPanelClick={props.onPanelClick}
          />
        ))
      }
    </>
  )
};

export default Queue;