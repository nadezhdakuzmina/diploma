import { combineReducers } from 'redux';

import { reducer as appDataReducer } from '@data/entities/appData';
import { reducer as userReducer } from '@data/entities/user';

export const reducer = combineReducers({
  appData: appDataReducer,
  user: userReducer,
});
