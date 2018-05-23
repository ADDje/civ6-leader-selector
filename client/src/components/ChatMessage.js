import React from 'react';

const ChatMessage = (props) =>
<div className="ChatMessage">
  <div className="ChatMessageName">
    {props.name+':'}
  </div>
  <div className="ChatMessageText">
    {props.text}
  </div>
</div>

export default ChatMessage;
