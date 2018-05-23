import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RollButton from './RollButton';
import ChatBox from '../containers/ChatBoxContainer';

const RoomLower = (props) =>
<div className="RoomLower">
  <Row>
    <Col className="RoomLowerLeft" sm={6}>
      {
        props.host ?
        <RollButton /> : ''
      }
    </Col>
    <Col className="RoomLowerRight" sm={6}><ChatBox /></Col>
  </Row>
</div>

export default RoomLower;
