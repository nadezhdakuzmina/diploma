import {
  SET_POINTS,
  SET_CURRENT_POINT,
  UNSET_CURRENT_POINT,
  FLUSH_POINTS,
  UPDATE_POINT,
  SET_CURRENT_POINT_CATEGORY
} from './actions';

import type { Point, FullPoint, PointCategory } from '@types';
import type { BaseAction } from '@data/types/actions';

export type FlushPointsAction = BaseAction<typeof FLUSH_POINTS>;

export type SetPointsAction = BaseAction<typeof SET_POINTS> & {
  points: (FullPoint | Point)[];
};

export type UpdatePointAction = BaseAction<typeof UPDATE_POINT> & {
  point: FullPoint | Point;
};

export type SetCurrentPointAction = BaseAction<typeof SET_CURRENT_POINT> & {
  point: FullPoint;
};

export type UnsetCurrentPointAction = BaseAction<typeof UNSET_CURRENT_POINT>;

export type SetCurrentPointCategoryAction = BaseAction<typeof SET_CURRENT_POINT_CATEGORY> & {
  category: PointCategory;
};

export type ActionTypes =
  | FlushPointsAction
  | SetPointsAction
  | UpdatePointAction
  | SetCurrentPointAction
  | UnsetCurrentPointAction
  | SetCurrentPointCategoryAction;
