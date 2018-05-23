import React from 'react';
import ReactTooltip from 'react-tooltip';
import { changeVictype } from '../actions/preferences';
import { toggleVisibility, changeTooltip } from '../actions/utils';

const VicTypeDropItem = (props) =>
<div onMouseOver={() => { props.dispatch(changeTooltip(props.type)); ReactTooltip.rebuild() }} data-tip data-for="global" onClick={() => { props.dispatch(changeVictype(props.type)); props.dispatch(toggleVisibility('victype')) }} style={props.style} className="VicType VicDrop">
  <div className="VicTypeBorder">
    <div className="VicIcon">
      {props.type === 'any' ? '' : <img alt="" src={require('../assets/images/vics/'+props.type+'.png')} /> }
    </div>
  </div>
</div>

export default VicTypeDropItem;
