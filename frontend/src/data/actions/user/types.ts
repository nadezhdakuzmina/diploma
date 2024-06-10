import { LOGOUT } from './actions';

import type { BaseAction } from '@data/types/actions';

export type LogoutAction = BaseAction<typeof LOGOUT>;

export type ActionTypes =
  | LogoutAction;
