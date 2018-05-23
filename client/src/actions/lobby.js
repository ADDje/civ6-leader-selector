export const ROOM_CREATE_REQUEST = 'socket/ROOM_CREATE_REQUEST';
export const ROOM_CREATE_SUCCESS = 'ROOM_CREATE_SUCCESS';
export const ROOM_CREATE_FAILURE = 'ROOM_CREATE_FAILURE';

export const ROOM_JOIN_REQUEST = 'socket/ROOM_JOIN_REQUEST';
export const ROOM_JOIN_SUCCESS = 'ROOM_JOIN_SUCCESS';
export const ROOM_JOIN_FAILURE = 'ROOM_JOIN_FAILURE';

export const ROOM_LEAVE_REQUEST = 'socket/ROOM_LEAVE_REQUEST';
export const ROOM_LEAVE_SUCCESS = 'ROOM_LEAVE_SUCCESS';
export const ROOM_LEAVE_FAILURE = 'ROOM_LEAVE_FAILURE';

export const ROOM_CREATED = 'ROOM_CREATED';
export const ROOM_DESTROYED = 'ROOM_DESTROYED';

export const CLIENT_JOIN_ROOM = 'CLIENT_JOIN_ROOM';
export const CLIENT_LEAVE_ROOM = 'CLIENT_LEAVE_ROOM';
export const CLIENT_DISCONNECTED = 'CLIENT_DISCONNECTED';
export const CLIENT_UPDATE = 'CLIENT_UPDATE';

export const SET_PREFERENCES_REQUEST = 'socket/SET_PREFERENCES_REQUEST';
export const SET_PREFERENCES_SUCCESS = 'SET_PREFERENCES_SUCCESS';
export const SET_PREFERENCES_FAILURE = 'SET_PREFERENCES_FAILURE';

export const ROOMS_GET_REQUEST = 'socket/ROOMS_GET_REQUEST';
export const ROOMS_GET_SUCCESS = 'ROOMS_GET_SUCCESS';
export const CLIENTS_GET_SUCCESS = 'CLIENTS_GET_SUCCESS';

export const RULES_CIVS_UPDATE_REQUEST = 'socket/RULES_CIVS_UPDATE_REQUEST';
export const RULES_CIVS_UPDATED = 'RULES_CIVS_UPDATED';
export const RULES_DUP_UPDATE_REQUEST = 'socket/RULES_DUP_UPDATE_REQUEST';
export const RULES_DUP_UPDATED = 'RULES_DUP_UPDATED';

export const ID_GET_SUCCESS = 'ID_GET_SUCCESS';

export const ROLL_CIVS = 'socket/ROLL_CIVS';

export function roomCreate(roomName, password) {
  return {
    type: ROOM_CREATE_REQUEST,
    payload: {
      name: roomName,
      password: password
    }
  };
}

export function roomJoin(roomName, password) {
  return {
    type: ROOM_JOIN_REQUEST,
    payload: {
      name: roomName,
      password: password
    }
  };
}

export function roomLeave(roomName) {
  return {
    type: ROOM_LEAVE_REQUEST,
    payload: {
      name: roomName
    }
  };
}

export function destroyRoom(roomName) {
  return {
    type: ROOM_DESTROYED,
    payload: roomName
  };
}

export function setPreferences(preferences) {
  return {
    type: SET_PREFERENCES_REQUEST,
    payload: preferences
  };
}

export function getRooms() {
  return {
    type: ROOMS_GET_REQUEST
  };
}

export function rollCivs() {
  return {
    type: ROLL_CIVS
  };
}

export function updateRulesDup(bool) {
  return {
    type: RULES_DUP_UPDATE_REQUEST,
    payload: {
      value: bool
    }
  };
}

export function updateRulesCiv(civ, bool) {
  return {
    type: RULES_CIVS_UPDATE_REQUEST,
    payload: {
      civ: civ,
      value: bool
    }
  };
}
