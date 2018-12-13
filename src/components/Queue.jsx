import React from 'react';
import QueuePanel from './QueuePanel.jsx'

const Queue = ({ priority,activePriority, onStartChat, ws }) => {
  let sortedData = priority && Object.keys(priority).length ? priority[activePriority].sort((a,b)=>(b.severity-a.severity)) : null;

  return (
    <>
      { sortedData ?
        sortedData.map(client=>(
          <QueuePanel 
            key={client.id} 
            client={client} 
            onStartChat={onStartChat}
            ws={ws}
          />
        )) : null
      }
    </>
  )
};

export default Queue;