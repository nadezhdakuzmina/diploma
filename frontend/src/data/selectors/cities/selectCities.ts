import type { State } from '@data/types';
import type { City } from '@types';

export const selectCities = (state: State): City[] | null => state.cities.cities;
