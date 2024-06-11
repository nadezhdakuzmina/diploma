import { combineReducers } from 'redux';

import { reducer as appDataReducer } from '@data/entities/appData';
import { reducer as userReducer } from '@data/entities/user';
import { reducer as countriesReducer } from '@data/entities/countries';
import { reducer as citiesReducer } from '@data/entities/cities';

export const reducer = combineReducers({
  appData: appDataReducer,
  user: userReducer,
  countries: countriesReducer,
  cities: citiesReducer,
});
