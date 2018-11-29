import React from 'react';

const Messages = (props) => {
  let disDiv = props.clientName ?
    (<div className="messages">
      <p>You are now chatting with <b>{props.clientName}</b></p><br />
      <div className="message-bubbles-left">
        <span className="client-message"> Hi, how are you? </span><br />
      </div>
      <div className="message-bubbles-right">
        <span className="counsellor-message"> Hi {props.clientName}, how are you?</span>
      </div>
      {props.Messages && props.Messages.map(message=>(
        <div className="message-bubbles-right">
          <span className="counsellor-message">{message}</span>
        </div>
      ))}
    </div>) : '';
  return (
    disDiv
  )
}

export default Messages;

// <div>
//   <span className="message-bubbles-left"> I just needed someone to talk to.. </span><br />
// </div>
// <div>
//   <span className="message-bubbles-right"> I'm all ears.. is everything ok?</span><br />
// </div>