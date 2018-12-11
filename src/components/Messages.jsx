import React from 'react';

const Messages = (props) => {
  return ( 
    props.clientName ? 
    (
      <div className="messages">
        <p>You are now chatting with <b>{props.clientName}</b></p><br />

        {
          props.messages && props.messages[props.queueId].map(message=>(
          <div>
            <div className='message-time'> <span>{message.time}</span></div> 
            <div className="message-bubbles-right">
              <span className="counsellor-message">{message.content}</span>
            </div>
            </div>
          ))
        }
      </div>
    ) : null
  )
}

export default Messages;