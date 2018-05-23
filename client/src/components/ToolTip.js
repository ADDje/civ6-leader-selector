import React from 'react';

function getWidth(text) {
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  ctx.font = "20px Arial";
  return Math.ceil(ctx.measureText(text).width/2)*2;
}

const ToolTip = (props) =>
<div style={{width: getWidth(props.text)}} className="ToolTipOuter">
  <div className="ToolTip">
    <div className="ToolTipBorder">
      <div className="ToolTipInner">
        <div className="ToolTipText">
          <span id="textLength">{props.text}</span>
        </div>
      </div>
    </div>
  </div>
</div>

export default ToolTip;
