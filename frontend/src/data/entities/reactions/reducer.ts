import {
  SET_REACTIONS
} from '@data/actions/reactions/actions';

import { defaultState } from './defaultState';

import type { ActionTypes } from '@data/actions/reactions/types';
import type { ReactionsState } from './types';

export const reducer = (state = defaultState, action: ActionTypes): ReactionsState => {
  switch (action.type) {
    case SET_REACTIONS:
      return {
        ...state,
        reactions: action.reactions,
      };

    default:
      return state;
  }
};
