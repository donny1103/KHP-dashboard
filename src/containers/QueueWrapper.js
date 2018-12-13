import { connect } from 'react-redux';
import Queue from '../components/Queue';
import { initiateChat, removeQueue, setEngagingClientId, setEngagedClientsId } from '../actions/';

const mapState = state => ({
  priority: state.socket.priority,
  activePriority: state.activePriority, 
});

const mapDispatch = dispatch => ({
  onStartChat: (id) => {
    dispatch(initiateChat(id));
    dispatch(removeQueue(id)); 
    dispatch(setEngagingClientId(id));
    dispatch(setEngagedClientsId(id));
  }
})

export default connect(mapState,mapDispatch)(Queue);