import { User } from '@api';
import { logoutAction } from '@data/actions/user';

import type { ThunkActionDispatch } from 'redux-thunk';

export const logoutThunk = () => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    User.logout().then(() => {
      dispatch(logoutAction());
    });
  };
};
