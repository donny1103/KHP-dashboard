import React from 'react';
import { Row, Col } from 'antd'; 

const ChatBoardPanelHeader = ({ client, onPanelClick }) => {

  return (
    <Row 
      type="flex" 
      justify="center" 
      align="middle" 
      className="chat-board-card-info" 
      onClick={() => onPanelClick(client.id)}
    >
      <Col span={12}>
        {client.gender ? <img alt="gender" src={`./img/${client.gender}.png`} className="chat-board-card-icon" /> :
          <img alt="gender" src={`./img/question.png`} className="chat-board-card-icon" />}
      </Col>
      <Col span={12}>
        {client.name}
      </Col>
    </Row>  
  )
}

export default ChatBoardPanelHeader;