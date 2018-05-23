import React from 'react';
import CheckBox from './CheckBox';
import { updateRulesCiv } from '../actions/lobby';

const CivSelect = (props) =>
<div className="CivSelect">
  {
    props.civlist.map((civ, i) => {
      return (
        <CheckBox
          key={i}
          onChange={() => {props.dispatch(updateRulesCiv(civ.leader, !props.civbools[civ.leader]))}}
          text={civ.leader.replace(/_/g, ' ')}
          name={civ.leader}
          checked={props.civbools[civ.leader]}
          disabled={!props.host}
        />
      )
    })
  }
</div>

export default CivSelect;
