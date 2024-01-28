import { SET_USERS } from '@data/actions/users/actions';

import type { ActionTypes } from '@data/actions/users/types';
import type { UserState } from './types';

export const initialState: UserState = {
  users: [],
};

export const users = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};
