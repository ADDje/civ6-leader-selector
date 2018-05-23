import React from 'react';
import RoomList from '../components/RoomList';
import ConfirmButton from './ConfirmButton';
import CreateGame from './modals/CreateGame';
import EnterPassword from './modals/EnterPassword';
import { openDialog } from 'redux-dialog-extended';

const Lobby = (props) =>
<div className="Lobby BodySection">
  <RoomList {...props} />
  <div className="LobbyButtons">
    <ConfirmButton onClick={() => { props.dispatch(openDialog('CreateGameModal')) }} text="Create Game" width={240} colour="#00874f" />
  </div>
  <CreateGame initialValues={{gameName: props.name+"'s Game"}} title="Create Game" {...props} />
  <EnterPassword title="Enter Password" {...props} />
</div>

export default Lobby;
