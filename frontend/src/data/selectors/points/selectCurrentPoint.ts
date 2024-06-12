import type { State } from '@data/types';
import type { FullPoint, Point } from '@types';

export const selectCurrentPoint = (state: State): FullPoint => {
    return state.points.currentPoint;
};
