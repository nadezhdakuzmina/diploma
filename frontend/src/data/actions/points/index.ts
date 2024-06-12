import {
  FLUSH_POINTS,
  SET_CURRENT_POINT,
  SET_POINTS,
  UNSET_CURRENT_POINT,
  UPDATE_POINT,
  SET_CURRENT_POINT_CATEGORY,
} from './actions';

import type { Point, FullPoint, PointCategory } from '@types';
import type {
  SetCurrentPointAction,
  SetPointsAction,
  UnsetCurrentPointAction,
  UpdatePointAction,
  FlushPointsAction,
  SetCurrentPointCategoryAction
} from './types';

export const setPointsAction = (points: (FullPoint | Point)[]): SetPointsAction => ({
  type: SET_POINTS,
  points,
});

export const updatePointAction = (point: FullPoint | Point): UpdatePointAction => ({
  type: UPDATE_POINT,
  point,
});

export const flushPointsAction = (): FlushPointsAction => ({
  type: FLUSH_POINTS,
});

export const setCurrentPointAction = (point: FullPoint): SetCurrentPointAction => ({
  type: SET_CURRENT_POINT,
  point,
});

export const unsetCurrentPointAction = (): UnsetCurrentPointAction => ({
  type: UNSET_CURRENT_POINT,
});

export const setCurrentPointCategoryAction = (category: PointCategory): SetCurrentPointCategoryAction => ({
  type: SET_CURRENT_POINT_CATEGORY,
  category,
});
