export const SET_BODY_TITLE = 'SET_BODY_TITLE';

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

export const CHANGE_TOOLTIP = 'CHANGE_TOOLTIP';

export const ROOM_SETUP = 'ROOM_SETUP';

export function setBodyTitle(title) {
  return {
    type: SET_BODY_TITLE,
    payload: title
  };
}

export function toggleVisibility(item) {
  return {
    type: TOGGLE_VISIBILITY,
    payload: item
  };
}

export function changeTooltip(tip) {
  return {
    type: CHANGE_TOOLTIP,
    payload: {
      tip: tip
    }
  };
}

export function changeRoomSetup(bool) {
  return {
    type: ROOM_SETUP,
    payload: bool
  };
}
