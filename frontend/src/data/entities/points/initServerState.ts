import { defaultState } from './defaultState';

import { PointCategory, type Request } from '@types';
import type { PointsState } from './types';

export const initServerState = (req: Request): PointsState => {
  const { points } = defaultState;

  return {
    points: req.points || points,
    currentPointType: PointCategory.Popular,
    currentPoint: null,
  };
};
