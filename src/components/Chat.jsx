import React from 'react';
import ChatBar from './ChatBar.jsx';
import Messages from './Messages.jsx';
import { Row } from 'antd';
import 'antd/dist/antd.css';

const Chat = ( {engagingClientId, queue, sendMessage, socket, wsId } ) => {
    
    const engagingClient = queue ? queue[engagingClientId] : null;
    const clientName = engagingClient ? engagingClient.name : null;
    const messages = engagingClient ? engagingClient.messages : [];
    return (
      <>
        <Row type="flex" align="middle" className="chat-header">
            {/* {
              engagingClient ? <img alt="gender" src={engagingClient.gender ? `./img/${engagingClient.gender}.png` : `./img/question.png`} className="chat-board-card-icon" /> : null
            } */}
          {clientName}
          
        </Row>

        <Messages 
          messages={messages} 
          clientName={clientName}
          engagingClientId={engagingClientId}
        />

        <ChatBar         
          sendMessage={sendMessage}
          clientId={engagingClientId}
          socket={socket}
          wsId={wsId}
        />
      </>
    );
};

export default Chat;