import {
  FLUSH_COUNTRIES,
  SET_COUNTRIES,
  SET_CURRENT_COUNTRY,
  UNSET_CURRENT_COUNTRY,
} from './actions';

import type { Country } from '@types';
import type { BaseAction } from '@data/types/actions';

export type SetCurrentCountryAction = BaseAction<typeof SET_CURRENT_COUNTRY> & {
  country: Country;
};

export type UnsetCurrentCountryAction = BaseAction<typeof UNSET_CURRENT_COUNTRY>;

export type FlushCountriesAction = BaseAction<typeof FLUSH_COUNTRIES>;

export type SetCountriesAction = BaseAction<typeof SET_COUNTRIES> & {
  countries: Country[];
};

export type ActionTypes =
  | SetCurrentCountryAction
  | UnsetCurrentCountryAction
  | FlushCountriesAction
  | SetCountriesAction;
