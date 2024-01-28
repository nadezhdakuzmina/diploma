import { fetchUsers } from '@data/resourses/users';
import { setUsersAction } from '.';

import type { Dispatch } from 'redux';
import type { ThunkActionDispatch } from 'redux-thunk';

export const fetchUsersResolver = () => {
  return async (dispatch: ThunkActionDispatch<any>) => {
    const users = await fetchUsers();
    dispatch(setUsersAction(users));
  };
};
