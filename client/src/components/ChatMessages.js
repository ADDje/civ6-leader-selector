import React from 'react';
import ChatMessage from './ChatMessage';
import Scrollbar from 'react-custom-scrollbars';

class ChatMessages extends React.Component {
  componentDidUpdate(prevProps) {
    if(this.props.messages.length === prevProps.messages.length + 1) {
      this.refs.chatScrollbar.scrollToBottom();
    }
  }

  render() {
    return (
      <div className="ChatMessages">
        <Scrollbar ref="chatScrollbar">
        {
          this.props.messages.map((message, i) => {
            if (message.time) {
              return (
                <ChatMessage
                  key={i}
                  name={message.name}
                  text={message.text}
                />
              );
            } else {
              return '';
            }
          })
        }
        </Scrollbar>
      </div>
    );
  }
}

export default ChatMessages;
