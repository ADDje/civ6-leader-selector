import React from 'react';
import reduxDialog from 'redux-dialog-extended';
import { closeDialog } from 'redux-dialog-extended';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import Modal from '../Modal';
import ConfirmButton from '../ConfirmButton';

function joinGame(values, dispatch, ownProps) {
  dispatch(closeDialog('EnterPasswordModal'));
  dispatch(push('/lobby/'+ownProps.payload.gameName+'?'+values.gamePassword));
}

const required = value => (value ? undefined : 'Required')

const renderField = ({input, placeholder, meta: {touched, pristine, error}}) =>
<input {...input} className={"ModalInput"+(touched && error ? " InputError" : "")} placeholder={placeholder} />

const EnterPassword = (props) => {
  const { handleSubmit } = props
  return (
    <div className="EnterPassword">
      <form onSubmit={ handleSubmit } >
        <div className="ModalInputGroup">
          <label htmlFor="gamePassword">Password:</label>
          <Field name="gamePassword" component={renderField} type="text" validate={required} />
        </div>
        <div className="ModalFooter">
          <ConfirmButton text="CANCEL" onClick={() => { props.dispatch(closeDialog('EnterPasswordModal')) }} width={200} colour="#aa2d2d" />
          <ConfirmButton text="JOIN" onClick={ handleSubmit } width={200} colour="#00874f" />
        </div>
      </form>
    </div>
  )
}

export default reduxDialog({
  name: 'EnterPasswordModal',
  contentLabel: 'Modal',
  style: {
    content: {
      height: '220px',
      width: '500px',
      marginTop: '-110px',
      marginLeft: '-250px'
    }
  }
})(reduxForm({form: 'enter_password', onSubmit: joinGame})(Modal(EnterPassword)));
