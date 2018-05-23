import React from 'react';

const CivLeader = (props) =>
<div className="CivLeader">
  <div className="CivLeaderInner">
    <div className="CivLeaderCircle CivLeaderCiv">
      <div className="CivLeaderCircleInner">
      <img alt={props.civ} src={require('../assets/images/civs/'+props.civ+'.png')} />
      </div>
    </div>
    <div className="CivLeaderCircle CivLeaderLeader">
      <div className="CivLeaderCircleInner">
      <img alt={props.leader} src={require('../assets/images/leaders/'+props.leader+'.png')} />
      </div>
    </div>
    <div className="CivLeaderText">
      {props.leader.replace(/_/g, ' ')+', '+props.civ}
    </div>
  </div>
</div>

export default CivLeader;
