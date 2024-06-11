import type { State } from '@data/types';
import type { Country } from '@types';

export const selectCurrentCountry = (state: State): Country => state.countries.currentCountry;
