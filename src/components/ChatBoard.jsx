import React from 'react';
import { Icon, Col } from 'antd';
import ChatBoardCard from './ChatBoardCard.jsx'
import 'antd/dist/antd.css';

const ChatBoard = (props) =>{

  const toggleChatBoard = () => {
    props.toggleChatBoard();
  }

  return (
    <>
      <Col span={4}>
        <Icon className='chatboard-icon' type={props.expendChatBoard ? 'right' : 'left'} onClick={toggleChatBoard}/>
      </Col>
      { 
        props.expendChatBoard ? 
        <Col span={20}>
          {
            props.chattingQueue.length !== 0 ? props.chattingQueue.map((queue)=>(<ChatBoardCard key={queue.id} data={queue}/>)) : null
          }
        </Col> 
        : null 
      }
    </>
  )
}

export default ChatBoard;