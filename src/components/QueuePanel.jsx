import React from 'react';
import QueuePanelHeader from './QueuePanelHeader.jsx'
import QueuePanelInfo from './QueuePanelInfo.jsx'
import { Button, Collapse } from 'antd';

const Panel = Collapse.Panel;

const QueuePanel = (props) => {

  const generateStartChatFunction = (id) => () => {
    props.startChat(id)
  }

  return(
    <Collapse 
      bordered={true}  
      className="card" key={props.data.id}
      style={{backgroundColor:'white'}}
    >
      <Panel 
        header={<QueuePanelHeader data={props.data}/>} 
        key={props.data.id}
        showArrow={false} 
      >
        <QueuePanelInfo data={props.data}/>

        <Button 
          type='primary'     
          className="chat-button" 
          onClick={generateStartChatFunction(props.data.id)}>
          <b>Chat ></b>
        </Button>        
      </Panel>
    </Collapse>
  )
}

export default QueuePanel;