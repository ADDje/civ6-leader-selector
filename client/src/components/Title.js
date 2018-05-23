import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { openDialog } from 'redux-dialog-extended';
import OrnateButton from './OrnateButton';
import OrnateCog from './OrnateCog';

const Title = (props) => {
  const handleBack = () => {
    if (props.title === 'Staging Room' || props.title === 'Multiplayer Game Setup') {
      props.dispatch(push('/lobby'));
    } else if(props.title === 'Online Games') {
      props.dispatch(push('/'));
    } else {
      console.log("Unknown location: "+props.title);
    }
  }
  return (
    <div className="Title BodySection">
      <div className="BoundaryLight">
        <div className="TitleContent">
          <div className="TitleCog"><OrnateCog  onClick={() => props.dispatch(openDialog('PreferencesModal'))} /></div>
          <div className="TitleText TitleTitle">{props.title}</div>
          <div className="TitleBack"><OrnateButton text="Back" onClick={() => { handleBack() }} /></div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Title);
