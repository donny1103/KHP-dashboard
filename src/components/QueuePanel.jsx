import React from 'react';
import QueuePanelHeader from './QueuePanelHeader.jsx'
import QueuePanelInfo from './QueuePanelInfo.jsx'
import { Button, Collapse, Row } from 'antd';

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

        <Row type='flex' justify='end'>
          <Button  
            className="chat-button" 
            style={{backgroundColor: '#08415B', color: '#F9F9F9'}}
            onClick={generateStartChatFunction(props.data.id)}>
            <b>Chat ></b>
          </Button> 
        </Row>       
      </Panel>
    </Collapse>
  )
}

export default QueuePanel;