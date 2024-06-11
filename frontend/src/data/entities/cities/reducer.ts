import { FLUSH_CITIES, SET_CITIES, SET_CURRENT_CITY, UNSET_CURRENT_CITY } from '@data/actions/cities/actions';
import { defaultState } from './defaultState';

import type { CitiesState } from './types';
import type { ActionTypes } from '@data/actions/cities/types';

export const reducer = (state = defaultState, action: ActionTypes): CitiesState => {
    switch(action.type) {
      case SET_CURRENT_CITY:
        return {
          ...state,
          currentCity: action.city,
        };
  
      case UNSET_CURRENT_CITY:
        return {
          ...state,
          currentCity: null,
        };
  
      case FLUSH_CITIES:
        return {
          ...state,
          cities: null,
        };
  
      case SET_CITIES:
        return {
          ...state,
          cities: action.cities,
        };
  
      default:
        return state;
    }
  };
  