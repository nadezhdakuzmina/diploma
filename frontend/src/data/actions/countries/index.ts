import {
  SET_CURRENT_COUNTRY,
  UNSET_CURRENT_COUNTRY,
  FLUSH_COUNTRIES,
  SET_COUNTRIES,
} from './actions';

import type { Country } from '@types';
import type {
  FlushCountriesAction,
  SetCountriesAction,
  SetCurrentCountryAction,
  UnsetCurrentCountryAction,
} from './types';

export const setCurrentCountryAction = (country: Country): SetCurrentCountryAction => ({
  type: SET_CURRENT_COUNTRY,
  country,
});

export const unsetCurrentCountryAction = (): UnsetCurrentCountryAction => ({
  type: UNSET_CURRENT_COUNTRY,
});

export const flushCountriesAction = (): FlushCountriesAction => ({
  type: FLUSH_COUNTRIES,
});

export const setCountriesAction = (countries: Country[]): SetCountriesAction => ({
  type: SET_COUNTRIES,
  countries,
});
