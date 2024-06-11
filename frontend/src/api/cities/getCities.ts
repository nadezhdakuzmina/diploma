import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams, City } from '@types';

type CountriesApiResponse = {
  cities: City[];
};

export const getCities = async (countrySlug: string, extraParams?: ApiExtraParams): Promise<City[]> => {
  return axios(`${BACKEND_BASE_URL}/cities`, {
    params: {
      countrySlug,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as CountriesApiResponse)
    .then(({ cities }) => cities);
};
