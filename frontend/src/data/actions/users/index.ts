import type {
  SetTokenAction,
} from './types';

import { SET_USERS } from './actions';

import type { User } from '@data/types/entities/user';

export const setUsersAction = (users: User[]): SetTokenAction => ({
  type: SET_USERS,
  users,
});

