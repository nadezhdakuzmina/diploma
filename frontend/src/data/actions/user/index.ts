import { LOGOUT, SET_USER_DATA } from './actions';

import type { UserData } from '@types';
import type {
  LogoutAction,
  SetUserDataAction,
} from './types';

export const logoutAction = (): LogoutAction => ({
  type: LOGOUT,
});

export const setUserDataAction = (user: UserData): SetUserDataAction => ({
  type: SET_USER_DATA,
  user,
});
