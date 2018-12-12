import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { activePriority } from '../actions/'

const mapState = state => ({
  priority:state.socket.priority
});

const mapDispatch = dispatch => ({
  onClick: (e) => (dispatch(activePriority(e.key)))
});

export default connect(mapState, mapDispatch)(Navbar);
