import React, { Component } from "react";
import uuidv4 from 'uuid/v4';

class Messages extends Component {

  constructor(props){
    super(props);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render(){
    let {clientName, messages} = this.props;
    let displayName = clientName ? clientName : 'Anonymous';
    return ( 
      <div className="messages">
        {messages ? 
          (
            <div>
              <p>You are now chatting with <b>{displayName}</b></p><br />
              {
                messages.map(message=>(
                <div key={uuidv4()}>
                  <div className={message.type==='toCounsellorMsg' ? 'message-time-left' : 'message-time-right'}> <span className='message-name'>{message.type==='toCounsellorMsg' ? displayName : 'Dan Karres'}</span> <span>{message.time}</span> </div> 
                  <div className={message.type==='toCounsellorMsg' ? 'message-bubbles-left' : "message-bubbles-right"}>
                    <span className={ message.type==='toCounsellorMsg' ? 'client-message' : "counsellor-message"}>{message.text}</span>
                  </div>
                  </div>
                ))
              }
              <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
              </div>  
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Messages;

