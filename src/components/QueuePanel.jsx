import React from 'react';
import QueuePanelHeader from './QueuePanelHeader.jsx'
import QueuePanelInfo from './QueuePanelInfo.jsx'
import { Button, Collapse, Row } from 'antd';
import { connect } from 'react-redux';
import { engagedClients, activeClient } from '../redux/actions/engagedClients';

const Panel = Collapse.Panel;

const mapStateToProps = state => ({
  ...state,
  activeClient: {...state.engagedClients.activeClient}
});

const mapDispatchToProps = dispatch => ({
  updateEngagedClients: (id, allQueue) => (dispatch(engagedClients({...allQueue[id], id:id}))),
  updateActiveClient: (id, allQueue) => (dispatch(activeClient({...allQueue[id], id:id})))
});

const QueuePanel = (props) => {

  const onStartChat = (id, allQueue) => () => {
    props.updateEngagedClients(id, allQueue);
    props.updateActiveClient(id, allQueue);
  }

  return(
    <Collapse 
      bordered={true}  
      className="card" key={props.data.id}
      style={{backgroundColor:'white'}}
    >
      <Panel 
        header={<QueuePanelHeader data={props.data}/>} 
        key={props.data.id}
        showArrow={false} 
      >
        <QueuePanelInfo data={props.data}/>

        <Row type='flex' justify='end'>
          <Button  
            className="chat-button" 
            style={{backgroundColor: '#08415B', color: '#F9F9F9'}}
            onClick={onStartChat(props.data.id,props.queue.all)}>
            <b>Chat ></b>
          </Button> 
        </Row>       
      </Panel>
    </Collapse>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(QueuePanel);