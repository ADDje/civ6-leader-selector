import React from 'react';

//Colours
//Blue: #0061a0
//Red: #aa2d2d
//Green: #00874f

const ConfirmButton = (props) =>
<button className="ConfirmButton" onClick={props.onClick}>
  <div className="ConfirmButtonCol" style={{width: props.width, background: props.colour}}>
    <div className="ConfirmButtonL"></div>
    <div className="ConfirmButtonM">
      <div className="ConfirmButtonMText">{props.text}</div>
    </div>
    <div className="ConfirmButtonR"></div>
  </div>
</button>

export default ConfirmButton;
