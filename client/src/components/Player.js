import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import VicType from './VicType';
import VicTypeOther from './VicTypeOther';
import CivLeader from './CivLeader';
import PlayerName from './PlayerName';

const Player = (props) =>
<Row className={"Player"+(props.id === props.lobby.id ? ' isPlayer' : '')}>
  <Col xs={3}><PlayerName name={props.preferences.name} host={props.host} /></Col>
  <Col xs={7}><CivLeader civ={props.civ.civ} leader={props.civ.leader} /></Col>
  <Col xs={2}>{props.id === props.lobby.id ? <VicType /> : <VicTypeOther type={props.preferences.victype} />}</Col>
</Row>

function mapStateToProps(state) {
  return {
    lobby: state.lobby,
    myprefs: state.preferences.online
  };
}

export default connect(mapStateToProps)(Player);
