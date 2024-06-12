import {
  FLUSH_POINTS,
  SET_CURRENT_POINT,
  SET_CURRENT_POINT_CATEGORY,
  SET_POINTS,
  UNSET_CURRENT_POINT,
  UPDATE_POINT,
} from '@data/actions/points/actions';

import { defaultState } from './defaultState';

import type { ActionTypes } from '@data/actions/points/types';
import type { PointsState } from './types';

export const reducer = (state = defaultState, action: ActionTypes): PointsState => {
  switch (action.type) {
    case FLUSH_POINTS:
      return {
        ...state,
        points: null,
      };

    case SET_POINTS:
      return {
        ...state,
        points: action.points,
      };

    case UPDATE_POINT:
      return {
        ...state,
        points: state.points?.reduce((acc, thread) => {
          if (thread.id === action.point.id) {
            acc.push(action.point);
          } else {
            acc.push(thread);
          }

          return acc;
        }, []),
      };

    case SET_CURRENT_POINT:
      return {
        ...state,
        currentPoint: action.point,
      };

    case UNSET_CURRENT_POINT:
      return {
        ...state,
        currentPoint: null,
      };

    case SET_CURRENT_POINT_CATEGORY:
      return {
        ...state,
        currentPointType: action.category,
      };

    default:
      return state;
  }
};
