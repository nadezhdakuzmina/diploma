import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, Country } from '@types';

type CountriesApiResponse = {
  countries: Country[];
};

export const getCountries = async (extraParams?: ApiExtraParams): Promise<Country[]> => {
  return axios(`${BACKEND_BASE_API_URL}/countries`, {
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as CountriesApiResponse)
    .then(({ countries }) => countries);
};
