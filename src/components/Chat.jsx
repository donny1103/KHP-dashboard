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
        <Row type="flex" justify="center" align="middle" className="chat-header">
          {clientName}
        </Row>

        <Messages 
          messages={messages} 
          clientName={clientName}
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