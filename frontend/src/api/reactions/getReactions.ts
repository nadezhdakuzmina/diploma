import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, Reaction } from '@types';

type ReactionsApiResponse = {
  reactions: Reaction[];
};

export const getReactions = async (extraParams?: ApiExtraParams): Promise<Reaction[]> => {
  return axios(`${BACKEND_BASE_API_URL}/reactions`, {
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as ReactionsApiResponse)
    .then(({ reactions }) => reactions);
};
