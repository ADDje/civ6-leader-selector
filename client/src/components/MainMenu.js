import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openDialog } from 'redux-dialog-extended';
import MenuItem from './MenuItem';

const MainMenu = (props) =>
<div className="MainMenu">
  <div className="MenuLogo">
    <img alt="Civ VI Logo" src={require('../assets/images/civ6_logo_large.png')} />
  </div>
  <div className="MenuList">
    <div className="MenuTop">
      <img alt="" src={require('../assets/images/spike.svg')} />
    </div>
    <div className="MenuItems">
      <MenuItem text="Single Player" />
      <Link to="lobby"><MenuItem text="Multiplayer" /></Link>
      <Link to="/" onClick={() => props.dispatch(openDialog('PreferencesModal'))} ><MenuItem text="Preferences" /></Link>
    </div>
    <div className="MenuBottom">
      <img alt="" src={require('../assets/images/spike.svg')} />
    </div>
  </div>
</div>

export default connect()(MainMenu);
