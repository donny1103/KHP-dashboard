import React from 'react';

const Messages = (props) => {
  let disDiv = props.clientName ?
    (<div className="messages">
      <p>You are now chatting with <b>{props.clientName}</b></p><br />
      <div>
        <span className="message-bubbles-left"> Hi, how are you? </span>
      </div>
      <div>
        <span className="message-bubbles-right"> Hi {props.clientName}, how are you?</span>
      </div>


    </div>) : '';
  return (
    disDiv
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