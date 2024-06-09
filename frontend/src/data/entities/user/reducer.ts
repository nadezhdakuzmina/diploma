import { SET_USER } from '@data/actions/user/actions';

import { defaultState } from './defaultState';

import type { ActionTypes } from '@data/actions/user/types';
import type { UserState } from './types';

export const reducer = (state = defaultState, action: ActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return action.user;

    default:
      return state;
  }
};
