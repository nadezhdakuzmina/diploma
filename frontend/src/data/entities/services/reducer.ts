import {
  FLUSH_SERVICES,
  SET_CURRENT_SERVICE,
  SET_SERVICES,
  UNSET_CURRENT_SERVICE,
  UPDATE_SERVICE,
} from '@data/actions/services/actions';

import { defaultState } from './defaultState';

import type { ActionTypes } from '@data/actions/services/types';
import type { ServicesState } from './types';

export const reducer = (state = defaultState, action: ActionTypes): ServicesState => {
  switch (action.type) {
    case FLUSH_SERVICES:
      return {
        ...state,
        services: null,
      };

    case SET_SERVICES:
      return {
        ...state,
        services: action.services,
      };

    case UPDATE_SERVICE:
      return {
        ...state,
        services: state.services?.reduce((acc, thread) => {
          if (thread.id === action.service.id) {
            acc.push(action.service);
          } else {
            acc.push(thread);
          }

          return acc;
        }, []),
      };

    case SET_CURRENT_SERVICE:
      return {
        ...state,
        currentService: action.service,
      };

    case UNSET_CURRENT_SERVICE:
      return {
        ...state,
        currentService: null,
      };

    default:
      return state;
  }
};
