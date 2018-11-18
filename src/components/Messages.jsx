import React from 'react';

const Messages = (props) => {

  return (
    <div className="messages">
      {
        props.Messages.map(message => (
          <div>
            <p className="message-bubbles"> {message} </p>
          </div>
        ))
      }
    </div>
  )
}

export default Messages;