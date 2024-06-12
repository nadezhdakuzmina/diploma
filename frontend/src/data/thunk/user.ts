import { User } from '@api';
import { logoutAction, setUserDataAction } from '@data/actions/user';
import { selectUserData } from '@data/selectors/user';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const loadUserDataThunk = () => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();
    const userData = selectUserData(state);

    if (userData) {
      return;
    }

    User.getUserData().then((userData) => {
      dispatch(setUserDataAction(userData));
    });
  };
};

export const logoutThunk = () => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    User.logout().then(() => {
      dispatch(logoutAction());
    });
  };
};
