import { connect } from 'react-redux';
import ChatBoard from '../components/ChatBoard'
import { setEngagingClientId, toggleChatBoard } from '../actions/';

const mapState = state => {
  let queue = {...state.socket.queue};
  let engagedClients = state.engagedClientsId.map(id => queue[id]);
  return{
    engagedClients,
    isChatBoardShown: state.isChatBoardShown
  }
}

const mapDispatch = dispatch => ({
  onPanelClick: (id) => dispatch(setEngagingClientId(id)),
  toggleChatBoard: (bool) => dispatch(toggleChatBoard(bool)) 
})

export default connect(mapState, mapDispatch)(ChatBoard);