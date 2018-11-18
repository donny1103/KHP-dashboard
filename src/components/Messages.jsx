import React from 'react';

const Messages = (props) => {

  return (
    <div className="messages">
      <p>You are now chatting with Ronnie</p>
      <div>
        <span className="message-bubbles-left"> Hi, how are you? </span>
      </div>
      <div>
        <span className="message-bubbles-right"> Hi, how are you? </span>
      </div>


    </div>
  )
}

export default Messages;


 // {
 //        props.Messages.map(message => (
 //          <div>
 //            <p className="message-bubbles"> {message} </p>
 //          </div>
 //        ))
 //      }