import React from 'react';
import { Icon, Col, Collapse, Row, Button } from 'antd';
import ChatBoardPanelHeader from './ChatBoardPanelHeader.jsx'
import ChatBoardPanelInfo from './ChatBoardPanelInfo.jsx'
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;

const ChatBoard = ({ isChatBoardShown, engagedClients, toggleChatBoard, onPanelClick, engagingClientId, disconnectIds }) =>{
  return (
    <>
      <Col span={isChatBoardShown ? 3 : 15}>
        <div className='icon-container'>
          <div className='icon-background'>
            <Icon className='chatboard-icon' type={isChatBoardShown ? 'right' : 'left'} onClick={()=>toggleChatBoard(!isChatBoardShown)}/>
          </div>
        </div>
      </Col>
      { 
        isChatBoardShown ? 
        <Col span={isChatBoardShown ? 20 : 0}>
          <Collapse
            bordered={true}
            accordion  
            className="chat-board-card" 
            style={{backgroundColor:'white'}}
          >        
          {
            engagedClients.length !== 0 ? engagedClients.map(client => (
                <Panel 
                  header={
                    <ChatBoardPanelHeader 
                      client={client} 
                      onPanelClick={onPanelClick}
                      engagingClientId={engagingClientId}
                      disconnectIds={disconnectIds}
                    />
                  } 
                  key={client.id}
                  showArrow={false} 
                >
                  <ChatBoardPanelInfo client={client} /> 
                  { disconnectIds.includes(client.id) &&
                    <Row type='flex' justify='end'>
                      <Button  
                      className="chat-button" 
                      style={{backgroundColor: '#08415B', color: '#F9F9F9'}}
                      >
                      <b>Archive</b>
                      </Button> 
                    </Row>
                  }      
                </Panel>
              
            )) : null
          }
          </Collapse>
        </Col> 
        : null 
      }
    </>
  )
}

export default ChatBoard;