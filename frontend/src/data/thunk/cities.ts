import { Cities } from '@api';

import { setCitiesAction, setCurrentCityAction } from '@data/actions/cities';
import { selectCities } from '@data/selectors/cities';
import { selectCurrentCity } from '@data/selectors/cities/selectCurrentCity';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const loadCurrentCityThunk = (citySlug: string) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();
    const currentCity = selectCurrentCity(state);

    if (currentCity) {
      return;
    }

    Cities.getCity(citySlug).then((city) => {
      dispatch(setCurrentCityAction(city));
    });
  };
};

export const loadCitiesThunk = (countrySlug: string) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();
    const cities = selectCities(state);

    if (cities) {
      return;
    }

    Cities.getCities(countrySlug).then((cities) => {
      dispatch(setCitiesAction(cities));
    });
  };
};
