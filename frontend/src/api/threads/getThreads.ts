import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams, Thread } from '@types';

type ThreadsApiResponse = {
  threads: Thread[];
};

type QueryParams = {
  countrySlug?: string;
  citySlug?: string;
};

export const getThreads = async (
  countrySlug?: string,
  citySlug?: string,
  extraParams?: ApiExtraParams
): Promise<Thread[]> => {
  const params: QueryParams = {};

  if (countrySlug) {
    params.countrySlug = countrySlug;
  }

  if (citySlug) {
    params.citySlug = citySlug;
  }

  return axios(`${BACKEND_BASE_URL}/threads`, {
    params,
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as ThreadsApiResponse)
    .then(({ threads }) => threads);
};
