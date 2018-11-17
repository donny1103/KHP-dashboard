import React from 'react';

const Messages = (props) => {

  return (
    <div>
      {
        props.Messages.map(message => (
          <p> {message} </p>
        ))
      }
    </div>
  )  
}

export default Messages;