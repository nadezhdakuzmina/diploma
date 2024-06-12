import type { State } from '@data/types';
import type { PointCategory } from '@types';

export const selectCurrentPointCategory = (state: State): PointCategory => {
    return state.points.currentPointType;
};
