import ChatBox from '../components/ChatBox';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    messages: state.chat.messages,
    name: state.preferences.online.name
  };
}

export default connect(mapStateToProps)(ChatBox);
