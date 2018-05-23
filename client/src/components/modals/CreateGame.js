import React from 'react';
import reduxDialog from 'redux-dialog-extended';
import { closeDialog } from 'redux-dialog-extended';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import Modal from '../Modal';
import ConfirmButton from '../ConfirmButton';
import { roomCreate } from '../../actions/lobby';

function createGame(values, dispatch) {
    dispatch(closeDialog('CreateGameModal'))
    if(values.gamePassword){
      dispatch(roomCreate(values.gameName, values.gamePassword));
      dispatch(push('/lobby/'+values.gameName+'?'+values.gamePassword));
    } else {
      dispatch(roomCreate(values.gameName, ''));
      dispatch(push('/lobby/'+values.gameName));
    }
}

const required = value => (value ? undefined : 'Required')

const renderField = ({input, placeholder, meta: {touched, pristine, error}}) =>
<input {...input} className={"ModalInput"+(touched && error ? " InputError" : "")} placeholder={placeholder} />

const CreateGame = (props) => {
  const { handleSubmit } = props
  return (
    <div className="CreateGame">
      <form onSubmit={ handleSubmit } >
        <div className="ModalInputGroup">
          <label htmlFor="gameName">Game Name:</label>
          <Field name="gameName" component={renderField} type="text" validate={required} />
        </div>
        <div className="ModalInputGroup">
          <label htmlFor="gamePassword">Password:</label>
          <Field placeholder="optional" name="gamePassword" className="ModalInput" component="input" type="text" />
        </div>
        <div className="ModalFooter">
          <ConfirmButton text="CANCEL" onClick={() => { props.dispatch(closeDialog('CreateGameModal')) }} width={200} colour="#aa2d2d" />
          <ConfirmButton text="CREATE" onClick={ handleSubmit } width={200} colour="#00874f" />
        </div>
      </form>
    </div>
  )
}

export default reduxDialog({
  name: 'CreateGameModal',
  contentLabel: 'Modal',
  style: {
    content: {
      height: '300px',
      width: '500px',
      marginTop: '-150px',
      marginLeft: '-250px'
    }
  }
})(reduxForm({form: 'create_game', onSubmit: createGame})(Modal(CreateGame)));
