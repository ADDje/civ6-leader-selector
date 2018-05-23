import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBodyTitle, changeRoomSetup } from '../actions/utils';
import { getRooms, roomJoin } from '../actions/lobby';
import Room from '../components/Room';
import { withRouter } from 'react-router-dom';

class RoomContainer extends Component {
  componentDidMount() {
    this.props.changeRoomSetup(false);
    this.props.getRooms();
    this.props.roomJoin(this.props.router.match.params.room, this.props.location.search.slice(1));
  }

  render() {
    return <Room {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      setBodyTitle,
      changeRoomSetup,
      getRooms,
      roomJoin
    }, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    lobby: state.lobby,
    roomsetup: state.utils.roomsetup,
    router: ownProps
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomContainer));
