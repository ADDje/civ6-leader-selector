import {
  PREFERENCES_UPDATE_LOCAL, PREFERENCES_UPDATE_ONLINE, PREFERENCES_UPDATE_SUCCESS,
  VICTYPE_CHANGE, TOGGLE_VIDBG
} from '../actions/preferences';

const INITIAL_STATE = {
  local: {
    vidbg: true
  },
  online: {
    name: 'Player',
    victype: 'any',
    dlc: {
      aztec: true,
      poland: false,
      australia: false,
      persia: false,
      nubia: false
    }
  },
  sync: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PREFERENCES_UPDATE_LOCAL:
      return { ...state,
        local: Object.assign({},state.local,action.payload)
    };
    case PREFERENCES_UPDATE_ONLINE:
      return { ...state,
        online: Object.assign({},state.online,action.payload),
        sync: false
    };
    case PREFERENCES_UPDATE_SUCCESS:
      return { ...state,
        sync: true
    };

    case VICTYPE_CHANGE:
      return { ...state,
        online: {...state.online,
          victype: action.payload
        }
    };

    case TOGGLE_VIDBG:
      return { ...state,
        local: {...state.local,
          vidbg: state.local.vidbg === true ? false: true
        }
    };

    default:
      return state;
  }
}
