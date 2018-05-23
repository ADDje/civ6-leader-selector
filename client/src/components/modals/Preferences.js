import React from 'react';
import reduxDialog from 'redux-dialog-extended';
import { closeDialog } from 'redux-dialog-extended';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import Modal from '../Modal';
import ConfirmButton from '../ConfirmButton';
import VicType from '../VicType';
import { setName, toggleVidbg, changeDLC } from '../../actions/preferences';
import CheckBox from '../CheckBox';

function nameSubmit(values, dispatch) {
  if(values.onlineName) {
    dispatch(setName(values.onlineName));
    dispatch(reset('preferences'));
  }
}

function prefSetLocal(preferences) {
  localStorage.setItem('prefs_local', JSON.stringify(preferences));
}

function prefSetOnline(preferences) {
  localStorage.setItem('prefs_online', JSON.stringify(preferences));
}

function prefResetLocal(preferences) {
  localStorage.removeItem('prefs_local');
}

function prefResetOnline(preferences) {
  localStorage.removeItem('prefs_online');
}

const notsaved = (value, placeholder) => (placeholder === value ? undefined : "Press Enter to Submit")

const renderField = ({input, placeholder, meta: {touched, pristine, warning}}) =>
<div>
  <input {...input} className={"ModalInput"+(touched && warning && !pristine ? " InputWarning" : "")} placeholder={placeholder} />
  <div className="InputWarningText">{touched && warning && !pristine ? warning : ""}</div>
</div>

const Preferences = (props) => {
  const { handleSubmit } = props
  return (
    <div className="Preferences">
      <div className="PrefsLocal">
        <div className="PrefsVidBG">
          <CheckBox onChange={() => {props.dispatch(toggleVidbg())}} checked={props.preferences.local.vidbg} name="vidbg" text="Video Background:" />
        </div>
      </div>
      <div className="PrefsOnline">
        <div className="PrefsInput">
          <div className="ModalInputGroup">
            <form onSubmit={handleSubmit}>
            <label htmlFor="onlineName">Display Name:</label>
            <Field placeholder={props.preferences.online.name} name="onlineName" component={renderField} type="text" warn={notsaved} />
            </form>
          </div>
        </div>
        <div className="PrefsVic">
          <label>Victory Type:
            <VicType />
          </label>
        </div>
        <div className="PrefsDLC">
          <CheckBox onChange={() => {props.dispatch(changeDLC(props.preferences.online.dlc, 'aztec'))}} checked={props.preferences.online.dlc.aztec} name="dlc_aztec" text="Aztec DLC:" />
          <CheckBox onChange={() => {props.dispatch(changeDLC(props.preferences.online.dlc, 'poland'))}} checked={props.preferences.online.dlc.poland} name="dlc_poland" text="Poland DLC:" />
          <CheckBox onChange={() => {props.dispatch(changeDLC(props.preferences.online.dlc, 'australia'))}} checked={props.preferences.online.dlc.australia} name="dlc_australia" text="Australia DLC:" />
          <CheckBox onChange={() => {props.dispatch(changeDLC(props.preferences.online.dlc, 'persia'))}} checked={props.preferences.online.dlc.persia} name="dlc_persia" text="Persia and Macedonia DLC:" />
          <CheckBox onChange={() => {props.dispatch(changeDLC(props.preferences.online.dlc, 'nubia'))}} checked={props.preferences.online.dlc.nubia} name="dlc_nubia" text="Nubia DLC:" />
        </div>
      </div>
      <div className="ModalFooter">
        <ConfirmButton text="RESET" onClick={() => { prefResetLocal(); prefResetOnline() }} width={200} colour="#0061a0" />
        <ConfirmButton text="CANCEL" onClick={() => { props.dispatch(closeDialog('PreferencesModal')) }} width={200} colour="#aa2d2d" />
        <ConfirmButton text="SAVE" onClick={() => { prefSetLocal(props.preferences.local); prefSetOnline(props.preferences.online) }} width={200} colour="#00874f" />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    preferences: state.preferences
  };
}

export default reduxDialog({
  name: 'PreferencesModal',
  contentLabel: 'Modal',
  style: {
    content: {
      height: '400px',
      width: '800px',
      marginTop: '-200px',
      marginLeft: '-400px'
    }
  }
})(reduxForm({form: 'preferences', onSubmit: nameSubmit})(connect(mapStateToProps)(Modal(Preferences))));
