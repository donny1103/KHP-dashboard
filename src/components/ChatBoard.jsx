import React from 'react';
import { Icon, Col, Collapse } from 'antd';
import ChatBoardPanelHeader from './ChatBoardPanelHeader.jsx'
import ChatBoardPanelInfo from './ChatBoardPanelInfo.jsx'
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import showChatBoard from '../redux/actions/showChatBoard';
import { activeClient } from '../redux/actions/engagedClients';

const Panel = Collapse.Panel;

const mapStateToProps = state => ({
  allQueue: state.queue.all,
  isChatBoardShown: state.showChatBoard.isChatBoardShown
})

const mapDispatchToProps = dispatch => ({
  toogleChat: (bool) => (dispatch(showChatBoard(bool))),
  updateActiveClient: (id, allQueue) => (dispatch(activeClient(allQueue[id])))
});

const ChatBoard = (props) =>{

  const toggleChatBoard = () => {
    let { isChatBoardShown } = props;
    props.toogleChat(!isChatBoardShown);
  }

  return (
    <>
      <Col span={props.isChatBoardShown ? 3 : 15}>
        <div className='icon-container'>
          <div className='board-header'></div>
          <Icon className='chatboard-icon' type={props.isChatBoardShown ? 'right' : 'left'} onClick={toggleChatBoard}/>
          <div className='board-footer'></div>
        </div>
      </Col>
      { 
        props.isChatBoardShown ? 
        <Col span={props.isChatBoardShown ? 20 : 0}>
          <Collapse
            bordered={true}
            accordion  
            className="chat-board-card" 
            style={{backgroundColor:'white'}}
          >        
          {
            props.engagedClients.length !== 0 ? props.engagedClients.map(queue=>(
                <Panel 
                  header={<ChatBoardPanelHeader data={queue} queueId={queue.id}/>} 
                  key={queue.id}
                  showArrow={false} 
                >
                  <ChatBoardPanelInfo data={queue} queueId={queue.id}/>       
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoard);