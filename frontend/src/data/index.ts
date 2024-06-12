import { combineReducers } from 'redux';

import { reducer as appDataReducer } from '@data/entities/appData';
import { reducer as userReducer } from '@data/entities/user';
import { reducer as countriesReducer } from '@data/entities/countries';
import { reducer as citiesReducer } from '@data/entities/cities';
import { reducer as threadsReducer } from '@data/entities/threads';
import { reducer as reactionsReducer } from '@data/entities/reactions';
import { reducer as pointsReducer } from '@data/entities/points';

export const reducer = combineReducers({
  appData: appDataReducer,
  user: userReducer,
  countries: countriesReducer,
  cities: citiesReducer,
  threads: threadsReducer,
  reactions: reactionsReducer,
  points: pointsReducer,
});
