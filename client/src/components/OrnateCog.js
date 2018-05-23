import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { changeTooltip } from '../actions/utils';

const OrnateButton = (props) =>
<button onMouseOver={() => { props.dispatch(changeTooltip('Preferences')); ReactTooltip.rebuild() }} data-tip data-for="global" className="OrnateButton" onClick={props.onClick}>
  <div className="OrnateButtonText">
    <img alt="Cog" src={require('../assets/images/cog.svg')} />
  </div>
</button>

export default connect()(OrnateButton);
