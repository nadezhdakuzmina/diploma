import { LOGOUT, SET_USER_DATA } from './actions';

import type { UserData } from '@types';
import type { BaseAction } from '@data/types/actions';

export type LogoutAction = BaseAction<typeof LOGOUT>;

export type SetUserDataAction = BaseAction<typeof SET_USER_DATA> & {
  user: UserData;
};

export type ActionTypes =
  | LogoutAction
  | SetUserDataAction;
