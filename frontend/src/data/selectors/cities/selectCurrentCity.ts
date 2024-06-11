import type { State } from '@data/types';
import type { City } from '@types';

export const selectCurrentCity = (state: State): City => state.cities.currentCity;
