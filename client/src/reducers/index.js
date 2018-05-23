import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dialogReducer } from 'redux-dialog-extended';
import { reducer as formReducer } from 'redux-form';

import lobbyReducer from './reducer_lobby';
import preferencesReducer from './reducer_preferences';
import utilsReducer from './reducer_utils';
import chatReducer from './reducer_chat';
import soloReducer from './reducer_solo';

export default combineReducers({
  lobby: lobbyReducer,
  preferences: preferencesReducer,
  utils: utilsReducer,
  chat: chatReducer,
  solo: soloReducer,
  dialogs: dialogReducer,
  form: formReducer,
  router: routerReducer
});
