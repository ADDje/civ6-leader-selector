/*import {
  SOLO_CIVS_UPDATE
} from '../actions/solo';

var tools = require('../../tools');

const INITIAL_STATE = {
  civs: tools.civsToBool(tools.civList),
  settingsopen: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case SOLO_CIVS_UPDATE:
      newCivs = {};
      newCivs[action.payload.civ] = action.payload.value
      return { ...state,
        civs: Object.assign({}, state.civs, newCivs)
    };

    default:
      return state;
  }
}*/
