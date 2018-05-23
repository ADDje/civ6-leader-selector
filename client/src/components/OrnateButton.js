import React from 'react';

const OrnateButton = (props) =>
<button className="OrnateButton" onClick={props.onClick}>
  <div className="OrnateButtonText">{props.text}</div>
</button>

export default OrnateButton;
