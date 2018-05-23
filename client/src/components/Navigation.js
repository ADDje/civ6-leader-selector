import React from 'react';
import { connect } from 'react-redux';
import NavButton from './NavButton';
import { changeRoomSetup } from '../actions/utils';

const Navigation = (props) =>
<div className="Navigation">
  <div className="NavigationItems">
    <NavButton onClick={() => {props.dispatch(changeRoomSetup(true))}} text="Game Setup" active={props.roomsetup ? true : false} />
    <NavButton onClick={() => {props.dispatch(changeRoomSetup(false))}} text="Staging Room" active={props.roomsetup ? false : true} />
  </div>
</div>

export default connect()(Navigation);
