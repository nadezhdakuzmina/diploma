import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, FullCountry } from '@types';

type SearchApiResponse = {
  countries: FullCountry[];
};

export const search = async (query: string, extraParams?: ApiExtraParams): Promise<FullCountry[]> => {
  return axios(`${BACKEND_BASE_API_URL}/search`, {
    params: {
      query,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as SearchApiResponse)
    .then(({ countries }) => countries);
};
