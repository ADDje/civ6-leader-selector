import { connect } from 'react-redux';
import Body from '../components/Body';

function mapStateToProps(state, ownProps) {
  return {
    utils: state.utils
  };
}

export default connect(mapStateToProps)(Body);
