import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, FullThread } from '@types';

type ThreadApiResponse = {
  thread: FullThread;
};

export const getThread = async (id: number, extraParams?: ApiExtraParams): Promise<FullThread> => {
  return axios(`${BACKEND_BASE_API_URL}/threads/thread`, {
    params: {
      id,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as ThreadApiResponse)
    .then(({ thread }) => thread);
};
