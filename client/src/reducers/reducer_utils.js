import {
  SET_BODY_TITLE,
  TOGGLE_VISIBILITY,
  CHANGE_TOOLTIP,
  ROOM_SETUP
} from '../actions/utils';

const INITIAL_STATE = {
  body_title: "Title",
  visibilities: {
    victype: false
  },
  tooltip: {
    tip: null
  },
  roomsetup: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_BODY_TITLE:
      return { ...state,
        body_title: action.payload
    };

    case TOGGLE_VISIBILITY: {
      const newState = {
        visibilities : {}
      };
      newState.visibilities[action.payload] = state.visibilities[action.payload] ? false : true;
      return Object.assign(
        {},
        state,
        newState
      )
    }

    case CHANGE_TOOLTIP:
      return { ...state,
        tooltip: action.payload
    };

    case ROOM_SETUP:
      return { ...state,
        body_title: action.payload ? 'Multiplayer Game Setup' : 'Staging Room',
        roomsetup: action.payload
    };

    default:
      return state;
  }
}
