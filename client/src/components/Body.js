import React from 'react';
import Header from './Header';
import BarTop from './BarTop';
import Title from './Title';
import BarBot from './BarBot';
import Room from '../containers/RoomContainer';
import Lobby from '../containers/LobbyContainer';
import { Route } from 'react-router-dom';

const Body = (props) =>
<div className="Body">
  <Header location={props.location} />
  <BarTop />
  <Title title={props.utils.body_title} />
  <BarBot />
  <Route exact path='/lobby' component={Lobby} />
  <Route path='/lobby/:room' component={Room} />
</div>

export default Body;
