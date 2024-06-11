import type { State } from '@data/types';
import type { Country } from '@types';

export const selectCountries = (state: State): Country[] | null => state.countries.countries;
