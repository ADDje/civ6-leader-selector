import React from 'react';
import { connect } from 'react-redux';
import VicTypeDrop from './VicTypeDrop';
import { toggleVisibility } from '../actions/utils';

const VicType = (props) =>
<div className="VicTypeContainer">
  <div onClick={() => { props.dispatch(toggleVisibility('victype')) }} className="VicType">
    <div className="VicTypeBorder">
      <div className="VicIcon">
        {props.preferences.online.victype === 'any' ? '' : <img alt={props.preferences.online.victype} src={require('../assets/images/vics/'+props.preferences.online.victype+'.png')} /> }
      </div>
      <div className="VicDropDown">
        <img alt="" src={require('../assets/images/dropdownarrow.png')} />
      </div>
    </div>
  </div>
  {
    props.utils.visibilities.victype ? <VicTypeDrop {...props} /> : ''
  }
</div>

function mapStateToProps(state) {
  return {
    preferences: state.preferences,
    utils: state.utils
  };
}


export default connect(mapStateToProps)(VicType);
