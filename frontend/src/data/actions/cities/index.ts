import {
  SET_CITIES,
  SET_CURRENT_CITY,
  FLUSH_CITIES,
  UNSET_CURRENT_CITY
} from './actions';

import type { City } from '@types';
import type {
  FlushCitiesAction,
  SetCitiesAction,
  SetCurrentCityAction,
  UnsetCurrentCityAction,
} from './types';

export const setCurrentCityAction = (city: City): SetCurrentCityAction => ({
  type: SET_CURRENT_CITY,
  city,
});

export const unsetCurrentCityAction = (): UnsetCurrentCityAction => ({
  type: UNSET_CURRENT_CITY,
});

export const flushCitiesAction = (): FlushCitiesAction => ({
  type: FLUSH_CITIES,
});

export const setCitiesAction = (cities: City[]): SetCitiesAction => ({
  type: SET_CITIES,
  cities,
});
