export const CHAT_SEND = 'socket/CHAT_SEND';
export const CHAT_RECEIVE = 'CHAT_RECEIVE';

export function chatSend(message) {
  return {
    type: CHAT_SEND,
    payload: message
  };
}
