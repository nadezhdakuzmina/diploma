import type {
  SetUserAction,
} from './types';

import { SET_USER } from './actions';

import type { UserData } from '@types';

export const setUserAction = (user: UserData): SetUserAction => ({
  type: SET_USER,
  user,
});
