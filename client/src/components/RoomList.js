import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RoomItems from './RoomItems';

const RoomList = (props) =>
<Grid className="PlayerList">
  <Row className="PlayerListHeaders">
    <Col className="PlayerListHeader" xs={5}>Game Name</Col>
    <Col className="PlayerListHeader" xs={2}>Password</Col>
    <Col className="PlayerListHeader" xs={3}>Rule Set</Col>
    <Col className="PlayerListHeader" xs={2}>Players</Col>
  </Row>
  <Row><Col className="RoomListSplitter" xs={12}></Col></Row>
  <RoomItems {...props} />
</Grid>

export default RoomList;
