import React from 'react';
import uuidv4 from 'uuid/v4';

const Messages = ({ clientName, messages }) => {
  return ( 
    clientName ? 
    (
      <div className="messages">
        <p>You are now chatting with <b>{clientName}</b></p><br />

        {
          messages.map(message=>(
          <div key={uuidv4()}>
            <div className='message-time'> <span>{message.time}</span></div> 
            <div className="message-bubbles-right">
              <span className="counsellor-message">{message.text}</span>
            </div>
            </div>
          ))
        }
      </div>
    ) : null
  )
}

export default Messages;