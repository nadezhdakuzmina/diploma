import { combineReducers } from 'redux';

import { reducer as userReducer } from '@data/entities/user';

export const reducer = combineReducers({
  user: userReducer,
});
