import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBodyTitle } from '../actions/utils';
import { getRooms, roomLeave, destroyRoom } from '../actions/lobby';
import Lobby from '../components/Lobby';

class LobbyContainer extends Component {
  componentDidMount() {
    this.props.setBodyTitle("Online Games");
    this.props.getRooms();
    if(this.props.lobby.active) {
      this.props.roomLeave(this.props.lobby.active);
    }
  }

  componentDidUpdate() {
    this.props.lobby.rooms.forEach(room => {
      if (room.clients.length === 0) {
        this.props.destroyRoom(room.name);
      }
    });
  }

  render() {
    return <Lobby {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  const boundActionCreators = bindActionCreators({
      setBodyTitle,
      getRooms,
      destroyRoom,
      roomLeave
    }, dispatch);

  return {...boundActionCreators, dispatch};
}

function mapStateToProps(state) {
  return {
    lobby: state.lobby,
    name: state.preferences.online.name
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
