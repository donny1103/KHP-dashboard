import React from 'react';

const Messages = (props) => {
  let disDiv = props.clientName ?
    (<div className="messages">
      <p>You are now chatting with <b>{props.clientName}</b></p><br />
      <div>
        <span className="message-bubbles-left"> Hi, how are you? </span><br />
      </div>
      <div>
        <span className="message-bubbles-right"> Hi {props.clientName}, how are you?</span><br />
      </div>

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