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

  return (
    <>
      <Col span={4}>
        <div><Icon className='chatboard-icon' type={props.expendChatBoard ? 'right' : 'left'} onClick={toggleChatBoard}/></div>
      </Col>
      { 
        props.expendChatBoard ? 
        <Col span={20}>
          {
            props.chattingQueue.length !== 0 ? props.chattingQueue.map(queue=>(
              <Collapse 
                bordered={true}  
                className="chat-board-card" 
                key={queue.id}
                style={{backgroundColor:'white'}}
              >
                <Panel 
                  header={<ChatBoardPanelHeader data={queue}/>} 
                  key={queue.id}
                  showArrow={false} 
                >
                  <ChatBoardPanelInfo data={queue}/>       
                </Panel>
              </Collapse>
            )) : null
          }
        </Col> 
        : null 
      }
    </>
  )
}

export default ChatBoard;