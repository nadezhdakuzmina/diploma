import { combineReducers } from 'redux';

import { users } from '@data/reducers/users';

export const reducer = combineReducers({
  users,
});
