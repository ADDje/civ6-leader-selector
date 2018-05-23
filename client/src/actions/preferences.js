export const PREFERENCES_UPDATE_LOCAL = 'PREFERENCES_UPDATE_LOCAL';
export const PREFERENCES_UPDATE_ONLINE = 'socket/PREFERENCES_UPDATE_ONLINE';
export const PREFERENCES_UPDATE_SUCCESS = 'PREFERENCES_UPDATE_SUCCESS';

export const VICTYPE_CHANGE = 'VICTYPE_CHANGE';

export const TOGGLE_VIDBG = 'TOGGLE_VIDBG';

export const DLC_CHANGE = 'DLC_CHANGE';

export function prefGetLocal(preferences) {
  return {
    type: PREFERENCES_UPDATE_LOCAL,
    payload: preferences
  };
}

export function prefGetOnline(preferences) {
  return {
    type: PREFERENCES_UPDATE_ONLINE,
    payload: preferences
  };
}

export function changeVictype(victype) {
  return {
    type: PREFERENCES_UPDATE_ONLINE,
    payload: {
      victype: victype
    }
  };
}

export function setName(name) {
  return {
    type: PREFERENCES_UPDATE_ONLINE,
    payload: {
      name: name
    }
  };
}

export function toggleVidbg() {
  return {
    type: TOGGLE_VIDBG
  };
}

export function changeDLC(dlc, tochange) {
  dlc[tochange] = dlc[tochange] ? false : true;
  return {
    type: PREFERENCES_UPDATE_ONLINE,
    payload: {
      dlc: dlc
    }
  };
}
