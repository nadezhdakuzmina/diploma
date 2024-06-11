import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams, Country } from '@types';

type CountryApiResponse = {
  country: Country | null;
};

export const getCountry = async (countrySlug: string, extraParams?: ApiExtraParams): Promise<Country | null> => {
  return axios(`${BACKEND_BASE_URL}/countries/country`, {
    params: {
      countrySlug,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as CountryApiResponse)
    .then(({ country }) => country);
};
