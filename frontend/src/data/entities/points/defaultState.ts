import { PointCategory } from '@types';

import type { PointsState } from './types';

export const defaultState: PointsState = {
  points: null,
  currentPointType: PointCategory.Popular,
  currentPoint: null,
};
