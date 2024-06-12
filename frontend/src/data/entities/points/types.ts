import type { Point, FullPoint, PointCategory } from '@types';

export type PointsState = {
  points: (FullPoint | Point)[] | null;
  currentPointType: PointCategory;
  currentPoint: FullPoint | null;
};
