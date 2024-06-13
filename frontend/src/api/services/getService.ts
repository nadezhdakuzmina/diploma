import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, FullService } from '@types';

type ServiceApiResponse = {
  service: FullService;
};

export const getService = async (id: number, extraParams?: ApiExtraParams): Promise<FullService> => {
  return axios(`${BACKEND_BASE_API_URL}/services/service`, {
    params: {
      id,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as ServiceApiResponse)
    .then(({ service }) => service);
};
