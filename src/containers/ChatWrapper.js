import { connect } from 'react-redux';
import Chat from '../components/Chat';
import { sendMessage } from '../actions/'

const mapState = state => ({
  queue: state.socket.queue,
  engagingClientId: state.engagingClientId
})

const mapDispatch = dispatch => ({
  sendMessage: (id, message) => dispatch(sendMessage(id, message))
})

export default connect(mapState, mapDispatch)(Chat);