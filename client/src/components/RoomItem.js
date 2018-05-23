import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { changeTooltip } from '../actions/utils';

const RoomItem = (props) =>
<Row onMouseOver={() => { props.dispatch(changeTooltip('Click to join: '+props.gameName)); ReactTooltip.rebuild() }} data-tip data-for="global" className="RoomItem">
  <Col className="RoomItemCol" xs={5}>{props.gameName}</Col>
  <Col className="RoomItemCol" xs={2}>{props.passworded?'Yes':'No'}</Col>
  <Col className="RoomItemCol" xs={3}>{props.rules}</Col>
  <Col className="RoomItemCol" xs={2}>{props.players}</Col>
</Row>

export default connect()(RoomItem);
