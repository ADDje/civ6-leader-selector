import React from 'react';

const RoomSetupSection = (props) =>
<div className="RoomSetupSection">
  <div className="RoomSetupHeader">
    <div className="RoomSetupHeaderText">
      {props.text}
    </div>
  </div>
  <div className="RoomSetupBody">
    {props.children}
  </div>
</div>

export default RoomSetupSection;
