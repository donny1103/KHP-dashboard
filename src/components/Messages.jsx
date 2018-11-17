import React from 'react';

const Messages = (props) => {

  return (
    <div className="messages">
      {
        props.Messages.map(message => (
          <p className="message-bubbles"> {message} </p>
        ))
      }
    </div>
  )
}

export default Messages;