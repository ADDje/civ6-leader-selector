import React from 'react';
import { connect } from 'react-redux';
import { rollCivs } from '../actions/lobby';

const RollButton = (props) =>
<button onClick={() => { props.dispatch(rollCivs()) }} className="RollButton">

</button>

export default connect()(RollButton);
