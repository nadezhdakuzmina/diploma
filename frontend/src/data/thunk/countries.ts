import { Countries } from '@api';

import { setCountriesAction, setCurrentCountryAction } from '@data/actions/countries';
import { selectCountries } from '@data/selectors/countries';
import { selectCurrentCountry } from '@data/selectors/countries/selectCurrentCountry';

import type { State } from '@data/types';
import type { ThunkActionDispatch } from 'redux-thunk';

export const loadCurrentCountryThunk = (countrySlug: string) => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();
    const currentCountry = selectCurrentCountry(state);

    if (currentCountry) {
      return;
    }

    Countries.getCountry(countrySlug).then((country) => {
      dispatch(setCurrentCountryAction(country));
    });
  };
};

export const loadCountriesThunk = () => {
  return async (dispatch: ThunkActionDispatch<any>, getState: () => State) => {
    const state = getState();
    const countries = selectCountries(state);

    if (countries) {
      return;
    }

    Countries.getCountries().then((countries) => {
      dispatch(setCountriesAction(countries));
    });
  };
};
