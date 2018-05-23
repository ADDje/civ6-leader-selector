import React from 'react';
import Player from './Player';

const Players = (props) =>
<div className="Players">
  {
    props.players ?
      props.players.map((player, i) => {
        return (
          <Player
            key={i}
            id={player.id}
            preferences={player.preferences}
            civ={player.civ}
            host={props.host === player.id ? true : false}
          />
        );
      }) :
    <p>No players found!</p>
  }
</div>

export default Players;
