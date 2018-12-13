import React from 'react';
import QueuePanelHeader from './QueuePanelHeader.jsx'
import QueuePanelInfo from './QueuePanelInfo.jsx'
import { Button, Collapse, Row } from 'antd';

const Panel = Collapse.Panel;

const QueuePanel = ({ client, onStartChat, ws }) => {

  const onClick = (id) => () => {
    onStartChat(id);
    ws.send(JSON.stringify(
      {
        type:'startChat',
        id,
        counsellorName: 'Dan Karres',
      }
    ));
  };

  return(
    <Collapse 
      bordered={true}  
      className="card" key={client.id}
      style={{backgroundColor:'white'}}
    >
      <Panel 
        header={<QueuePanelHeader client={client}/>} 
        key={client.id}
        showArrow={false} 
      >
        <QueuePanelInfo client={client}/>

        <Row type='flex' justify='end'>
          <Button  
            className="chat-button" 
            style={{backgroundColor: '#08415B', color: '#F9F9F9'}}
            onClick={onClick(client.id)}
          >
            <b>Chat ></b>
          </Button> 
        </Row>       
      </Panel>
    </Collapse>
  )
}

export default QueuePanel;