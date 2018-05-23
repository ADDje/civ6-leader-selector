import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Players from './Players';

const PlayerList = (props) =>
<Grid className="PlayerList">
  <Row className="PlayerListHeaders">
    <Col className="PlayerListHeader" xs={3}>Players</Col>
    <Col className="PlayerListHeader" xs={7}>Civilization and Leader</Col>
    <Col className="PlayerListHeader" xs={2}>Victory</Col>
  </Row>
  <Players host={props.lobby.rooms.length && props.lobby.active && !props.lobby.loading ? props.lobby.rooms.find(room => room.name === props.lobby.active).host : null} players={props.lobby.rooms.length && props.lobby.active && !props.lobby.loading ? props.lobby.rooms.find(room => room.name === props.lobby.active).clients : null } />
  <Row>
    <Col className="PlayerListFooterSplitter" xs={12}></Col>
  </Row>
  <Row className="PlayerListFooters">
    <Col className="PlayerListFooter" xs={12}></Col>
  </Row>
</Grid>

export default PlayerList;
