import React from 'react';
import { Row, Col } from 'antd'; 
import { connect} from 'react-redux';
import { activeClient } from '../redux/actions/engagedClients';

const mapStateToProps = state => ({
  allQueue: state.queue.all
})

const mapDispatchToProps = dispatch => ({
  updateActiveClient: (id, allQueue) => (dispatch(activeClient(allQueue[id])))
});

const ChatBoardPanelHeader = (props) => {

  return (
    <Row type="flex" justify="center" align="middle" className="chat-board-card-info" onClick={()=>(props.updateActiveClient(props.queueId, props.allQueue))}>
      <Col span={12}>
        {props.data.gender ? <img alt="gender" src={`./img/${props.data.gender}.png`} className="chat-board-card-icon" /> :
          <img alt="gender" src={`./img/question.png`} className="chat-board-card-icon" />}
      </Col>
      <Col span={12}>
        {props.data.name}
      </Col>
    </Row>  
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoardPanelHeader);