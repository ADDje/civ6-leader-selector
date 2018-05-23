import React from 'react';
import VicTypeDropItem from './VicTypeDropItem';
import { toggleVisibility } from '../actions/utils';

const VicTypeDrop = (props) =>
<div className="VicTypeDrop">
  <div onClick={() => { props.dispatch(toggleVisibility('victype')) }} className="VicTypeDropClick"></div>
  <div className="VicTypeDropInner">
    <VicTypeDropItem type="any" {...props} />
    <VicTypeDropItem style={{marginTop: '3px'}} type="culture" {...props} />
    <VicTypeDropItem style={{marginTop: '3px'}} type="domination" {...props} />
    <VicTypeDropItem style={{marginTop: '3px'}} type="religion" {...props} />
    <VicTypeDropItem style={{marginTop: '3px'}} type="science" {...props} />
  </div>
</div>

export default VicTypeDrop;
