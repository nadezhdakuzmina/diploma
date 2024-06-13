import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, City } from '@types';

type CountriesApiResponse = {
  city: City | null;
};

export const getCity = async (citySlug: string, extraParams?: ApiExtraParams): Promise<City | null> => {
  return axios(`${BACKEND_BASE_API_URL}/cities/city`, {
    params: {
      citySlug,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as CountriesApiResponse)
    .then(({ city }) => city);
};
