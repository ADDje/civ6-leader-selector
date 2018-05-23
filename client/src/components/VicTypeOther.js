import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { changeTooltip } from '../actions/utils';

const VicTypeOther = (props) =>
<div onMouseOver={() => { props.dispatch(changeTooltip(props.type)); ReactTooltip.rebuild() }} data-tip data-for="global" className="VicTypeOther">
  <div className="VicTypeBorder">
    <div className="VicIcon">
      {props.type === 'any' ? '' : <img alt={props.type} src={require('../assets/images/vics/'+props.type+'.png')} /> }
    </div>
  </div>
</div>

export default connect()(VicTypeOther);
