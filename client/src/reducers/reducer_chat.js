import {
  CHAT_SEND, CHAT_RECEIVE
} from '../actions/chat';

const INITIAL_STATE = {
  messages: [{
    time: null,
    name: null,
    text: null
  }]
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHAT_SEND:
      return { ...state,
        messages: [...state.messages,
        action.payload]
    };
    case CHAT_RECEIVE:
      return { ...state,
        messages: [...state.messages,
        action.payload]
    };

    default:
      return state;
  }
}
