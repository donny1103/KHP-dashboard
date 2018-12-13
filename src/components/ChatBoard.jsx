import React from 'react';
import { Icon, Col, Collapse } from 'antd';
import ChatBoardPanelHeader from './ChatBoardPanelHeader.jsx'
import ChatBoardPanelInfo from './ChatBoardPanelInfo.jsx'
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;

const ChatBoard = ({ isChatBoardShown, engagedClients, toggleChatBoard, onPanelClick }) =>{
  return (
    <>
      <Col span={isChatBoardShown ? 3 : 15}>
        <div className='icon-container'>
          <div className='board-header'></div>
          <Icon className='chatboard-icon' type={isChatBoardShown ? 'right' : 'left'} onClick={()=>toggleChatBoard(!isChatBoardShown)}/>
          <div className='board-footer'></div>
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
                  header={<ChatBoardPanelHeader client={client} onPanelClick={onPanelClick}/>} 
                  key={client.id}
                  showArrow={false} 
                >
                  <ChatBoardPanelInfo client={client} />       
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