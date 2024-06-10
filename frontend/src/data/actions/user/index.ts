import type {
  LogoutAction,
} from './types';

import { LOGOUT } from './actions';

export const logoutAction = (): LogoutAction => ({
  type: LOGOUT,
});
