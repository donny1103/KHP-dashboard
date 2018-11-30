import React from 'react';
import { Icon, Col, Collapse } from 'antd';
import ChatBoardPanelHeader from './ChatBoardPanelHeader.jsx'
import ChatBoardPanelInfo from './ChatBoardPanelInfo.jsx'
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;

const ChatBoard = (props) =>{

  const toggleChatBoard = () => {
    props.toggleChatBoard();
  }

  const onPanelClick = (id) => () => {
    props.onPanelClick(id);
  }

  return (
    <>
      <Col span={props.expendChatBoard ? 3 : 15}>
        <div className='icon-container'>
          <div className='board-header'></div>
          <Icon className='chatboard-icon' type={props.expendChatBoard ? 'right' : 'left'} onClick={toggleChatBoard}/>
          <div className='board-footer'></div>
        </div>
      </Col>
      { 
        props.expendChatBoard ? 
        <Col span={props.expendChatBoard ? 20 : 0}>
          <Collapse
            bordered={true}
            accordion  
            className="chat-board-card" 
            style={{backgroundColor:'white'}}
          >        
          {
            props.chattingQueue.length !== 0 ? props.chattingQueue.map(queue=>(
                <Panel 
                  header={<ChatBoardPanelHeader data={queue} onPanelClick={onPanelClick} queueId={queue.id}/>} 
                  key={queue.id}
                  showArrow={false} 
                >
                  <ChatBoardPanelInfo data={queue}/>       
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