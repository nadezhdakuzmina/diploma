import {
  FLUSH_CITIES,
  SET_CITIES,
  SET_CURRENT_CITY,
  UNSET_CURRENT_CITY,
} from './actions';

import type { City } from '@types';
import type { BaseAction } from '@data/types/actions';

export type SetCurrentCityAction = BaseAction<typeof SET_CURRENT_CITY> & {
  city: City;
};

export type UnsetCurrentCityAction = BaseAction<typeof UNSET_CURRENT_CITY>;

export type FlushCitiesAction = BaseAction<typeof FLUSH_CITIES>;

export type SetCitiesAction = BaseAction<typeof SET_CITIES> & {
  cities: City[];
};

export type ActionTypes =
  | SetCurrentCityAction
  | UnsetCurrentCityAction
  | FlushCitiesAction
  | SetCitiesAction;
