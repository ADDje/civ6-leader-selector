import React from 'react';
import { connect } from 'react-redux';
import RoomSetupSection from './RoomSetupSection';
import CivSelect from './CivSelect';
import CheckBox from './CheckBox';
import { updateRulesDup } from '../actions/lobby';
var tools = require('../tools.js');

const RoomSetup = (props) =>
<div className="RoomSetup">
  <div className="RoomSetupInner">
    <RoomSetupSection text="Room Options">
      <CheckBox onChange={props.rules ? () => {props.dispatch(updateRulesDup(!props.rules.duplicate))} : ''} checked={props.rules ? props.rules.duplicate : null} disabled={!props.host} name="dupcivs" text="Allow Duplicate Civs:" />
    </RoomSetupSection>
    <RoomSetupSection text="Enabled Civs">
      <CivSelect dispatch={props.dispatch} civbools={props.rules ? props.rules.civs : null} civlist={tools.civList} host={props.host} />
    </RoomSetupSection>
    <div className="RoomSetupFooter"></div>
  </div>
</div>

export default connect()(RoomSetup);
