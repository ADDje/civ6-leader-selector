import React from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatBox = (props) =>
<div className="ChatBox">
  <div className="ChatBoxInner">
    <div className="ChatBoxShadowTop"></div>
    <div className="ChatBoxShadowLeft"></div>
    <div className="ChatBoxShadowBottom"></div>
    <div className="ChatBoxShadowRight"></div>
    <div className="ChatBoxHeader">
      <div className="ChatBoxHeaderIcon CBHIL">
        <div className="ChatBoxHeaderIconInner"></div>
      </div>
      <div className="ChatBoxHeaderText">
        Chat
      </div>
      <div className="ChatBoxHeaderIcon CBHIR">
        <div className="ChatBoxHeaderIconInner"></div>
      </div>
    </div>
    <div className="ChatBoxSplitter"></div>
    <div className="ChatBoxBody">
      <ChatMessages messages={props.messages} />
      <ChatInput name={props.name} />
    </div>
  </div>
</div>

export default ChatBox;
