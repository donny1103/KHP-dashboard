import React from 'react';
import { Row, Col } from 'antd'; 

const ChatBoardPanelHeader = (props) => (
  <Row type="flex" justify="center" align="middle" className="chat-board-card-info" onClick={props.onPanelClick(props.queueId)}>
    <Col span={12}>
      {props.data.gender ? <img alt="gender" src={`./img/${props.data.gender}.png`} className="chat-board-card-icon" /> :
        <img alt="gender" src={`./img/question.png`} className="chat-board-card-icon" />}
    </Col>
    <Col span={12}>
      {props.data.name}
    </Col>
  </Row>  
)

export default ChatBoardPanelHeader;