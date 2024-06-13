import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, Service } from '@types';

type ServicesApiResponse = {
  services: Service[];
};

type QueryParams = {
  countrySlug?: string;
  citySlug?: string;
};

export const getServices = async (
  countrySlug?: string,
  citySlug?: string,
  extraParams?: ApiExtraParams
): Promise<Service[]> => {
  const params: QueryParams = {};

  if (countrySlug) {
    params.countrySlug = countrySlug;
  }

  if (citySlug) {
    params.citySlug = citySlug;
  }

  return axios(`${BACKEND_BASE_API_URL}/services`, {
    params,
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as ServicesApiResponse)
    .then(({ services }) => services);
};
