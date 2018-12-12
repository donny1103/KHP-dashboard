import React from 'react';
import QueuePanel from './QueuePanel.jsx'

const Queue = ({ priority,activePriority, onStartChat }) => {
  let sortedData = priority && Object.keys(priority).length ? priority[activePriority].sort((a,b)=>(b.severity-a.severity)) : null;

  return (
    <>
      { sortedData ?
        sortedData.map(item=>(
          <QueuePanel 
            key={item.id} 
            data={item} 
            onStartChat={onStartChat}
          />
        )) : null
      }
    </>
  )
};

export default Queue;