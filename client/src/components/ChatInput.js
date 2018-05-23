import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { chatSend } from '../actions/chat';

function sendChat(values, dispatch, ownProps) {
  if(values.chatInput) {
    let data = {
      time: Date.now() /100 | 0,
      name: ownProps.name,
      text: values.chatInput
    };
    dispatch(chatSend(data));
    dispatch(reset('chat_input'));
  }
}

const ChatInput = (props) => {
  const { handleSubmit } = props
  return (
    <div className="ChatInput">
      <div className="ChatInputInner">
        <div className="ChatInputIcon">

        </div>
        <form onSubmit={ handleSubmit }>
          <Field name="chatInput" className="ChatInputText" component="input" type="text" />
        </form>
      </div>
    </div>
  )
}

export default reduxForm({form: 'chat_input', onSubmit: sendChat})(ChatInput);
