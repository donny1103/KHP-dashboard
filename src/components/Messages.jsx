import React from 'react';

const Messages = (props) => {
  return ( 
    props.clientName &&
    (
      <div className="messages">
        <p>You are now chatting with <b>{props.clientName}</b></p><br />
        <div className="message-bubbles-left">
          <span className="client-message"></span>
        </div>
        <div className="message-bubbles-right">
          <span className="counsellor-message"></span>
        </div>
        {props.Messages && props.Messages.map(message=>(
          <div className="message-bubbles-right">
            <span className="counsellor-message">{message}</span>
          </div>
        ))}
      </div>
    )
  )
}

export default Messages;