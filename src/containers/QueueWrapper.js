import { connect } from 'react-redux';
import Queue from '../components/Queue';
import { initiateChat, removeQueue } from '../actions/';

const mapState = state => ({
  priority: state.socket.priority,
  activePriority: state.activePriority, 
});

const mapDispatch = dispatch => ({
  onStartChat: (id) => {dispatch(initiateChat(id));dispatch(removeQueue(id))},
})

export default connect(mapState,mapDispatch)(Queue);