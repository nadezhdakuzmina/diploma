import {
  FLUSH_COUNTRIES,
  SET_COUNTRIES,
  SET_CURRENT_COUNTRY,
  UNSET_CURRENT_COUNTRY,
} from '@data/actions/countries/actions';
import { defaultState } from './defaultState';

import type { CountriesState } from './types';
import type { ActionTypes } from '@data/actions/countries/types';

export const reducer = (state = defaultState, action: ActionTypes): CountriesState => {
  switch(action.type) {
    case SET_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountry: action.country,
      };

    case UNSET_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountry: null,
      };

    case FLUSH_COUNTRIES:
      return {
        ...state,
        countries: null,
      };

    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };

    default:
      return state;
  }
};
