import React from 'react';
import { Col } from 'antd';

const ChatBoardCard = (props) => {

  return (
    <>
      <Col span={12} >
        {
          props.data.gender ? 
          <img alt="gender" src={`./img/${props.data.gender}.png`} className="card-icon" /> :
          <img alt="gender" src={`./img/question.png`} className="card-icon" />
        }
      </Col>

      <Col span={12} >
        {props.data.name}
      </Col>
    </>
  )
}

export default ChatBoardCard;