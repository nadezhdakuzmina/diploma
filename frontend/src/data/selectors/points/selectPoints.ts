import type { State } from '@data/types';
import type { FullPoint, Point } from '@types';

export const selectPoints = (state: State): (Point | FullPoint)[] => {
    return state.points.points;
};
