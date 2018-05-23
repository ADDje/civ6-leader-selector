import React from 'react';
import RoomItem from './RoomItem';
import { openDialog } from 'redux-dialog-extended';
import { Link } from 'react-router-dom';

const RoomItems = (props) =>
<div className="RoomItems">
  {
    props.lobby.rooms.map((room, i) => {
      if (room.clients.length === 0) {
        return <div key={i}></div>;
      } else if (room.passworded) {
      return (
        <div class="RoomPW" key={i} onClick={() => { props.dispatch(openDialog('EnterPasswordModal', { gameName: room.name })) }}>
          <RoomItem
            gameName={room.name}
            passworded={room.passworded}
            rules={'Standard'}
            players={room.clients.length}
          />
        </div>
      );} else {
      return (
        <Link key={i} to={'/lobby/'+room.name}>
          <RoomItem
            gameName={room.name}
            passworded={room.passworded}
            rules={'Standard'}
            players={room.clients.length}
          />
        </Link>
      );}
    })
  }
</div>


export default RoomItems;
