import React from 'react';
import { Row, Col } from 'antd'; 

const ChatBoardPanelHeader = ({ client, onPanelClick, engagingClientId, disconnectIds }) => {
  let style;

  if(engagingClientId === client.id){
    style = {backgroundColor:'#8EDC9D'}
  } else {
    style = {backgroundColor:'white'};
  }

  if (disconnectIds.includes(client.id)){
    style = {backgroundColor:'grey'};
  } 

  return (
    <Row 
      type="flex" 
      justify="center" 
      align="middle" 
      className="chat-board-card-info" 
      style={style}
      onClick={() => onPanelClick(client.id)}
    >
      <Col span={12}>
        {/* {client.gender ? <img alt="gender" src={`./img/${client.gender}.png`} className="chat-board-card-icon" /> :
          <img alt="gender" src={`./img/question.png`} className="chat-board-card-icon" />} */}
        {
          <img alt="gender" src={client.gender ? `./img/${client.gender}.png` : `./img/question.png`} className="chat-board-card-icon" />
        }
      </Col>
      <Col span={12}>
        {client.name}
      </Col>
    </Row>  
  )
}

export default ChatBoardPanelHeader;