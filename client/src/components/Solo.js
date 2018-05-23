import React from 'react';
import Navigation from './Navigation';
import PlayerList from './PlayerList';
import RoomLower from './RoomLower';
import RoomSetup from './RoomSetup';

const Room = (props) =>
<div className="Room BodySection">
  <Navigation roomsetup={props.settingsopen} />
  {
    props.settingsopen ?
    <div className="RoomSection">
      Settings component
    </div>
    :
    <div className="RoomSection">
      Pick a victory type, show result component
    </div>
  }
</div>

export default Room;
