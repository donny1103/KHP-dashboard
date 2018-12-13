import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { setActivePriority } from '../actions/'

const mapState = state => ({
  priority:state.socket.priority
});

const mapDispatch = dispatch => ({
  onClick: (e) => (dispatch(setActivePriority(e.key)))
});

export default connect(mapState, mapDispatch)(Navbar);
