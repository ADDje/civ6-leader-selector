import React from 'react';
import Navigation from './Navigation';
import PlayerList from './PlayerList';
import RoomLower from './RoomLower';
import RoomSetup from './RoomSetup';

const Room = (props) =>
<div className="Room BodySection">
  <Navigation roomsetup={props.roomsetup} />
  {
    props.roomsetup ?
    <div className="RoomSection">
      <RoomSetup rules={props.lobby.rooms.length && props.lobby.active && !props.lobby.loading ? props.lobby.rooms.find(room => room.name === props.lobby.active).rules : null} host={props.lobby.rooms.length && props.lobby.active && !props.lobby.loading ? props.lobby.rooms.find(room => room.name === props.lobby.active).host === props.lobby.id : false} />
    </div>
    :
    <div className="RoomSection">
      <PlayerList {...props} />
      <RoomLower host={props.lobby.rooms.length && props.lobby.active && !props.lobby.loading ? props.lobby.rooms.find(room => room.name === props.lobby.active).host === props.lobby.id : false} />
    </div>
  }
</div>

export default Room;
