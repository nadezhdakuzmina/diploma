import {
  FLUSH_THREADS,
  SET_CURRENT_THREAD,
  SET_THREADS,
  UNSET_CURRENT_THREAD,
  UPDATE_THREAD,
} from '@data/actions/threads/actions';

import { defaultState } from './defaultState';

import type { ActionTypes } from '@data/actions/threads/types';
import type { ThreadsState } from './types';

export const reducer = (state = defaultState, action: ActionTypes): ThreadsState => {
  switch (action.type) {
    case FLUSH_THREADS:
      return {
        ...state,
        threads: null,
      };

    case SET_THREADS:
      return {
        ...state,
        threads: action.threads,
      };

    case UPDATE_THREAD:
      return {
        ...state,
        threads: state.threads?.reduce((acc, thread) => {
          if (thread.id === action.thread.id) {
            acc.push(action.thread);
          } else {
            acc.push(thread);
          }

          return acc;
        }, []),
      };

    case SET_CURRENT_THREAD:
      return {
        ...state,
        currentThread: action.thread,
      };

    case UNSET_CURRENT_THREAD:
      return {
        ...state,
        currentThread: null,
      };

    default:
      return state;
  }
};
