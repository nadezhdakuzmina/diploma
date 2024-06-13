import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams } from '@types';

type RevokeReactionApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const revokeReaction = async (reactionId: number, extraParams?: ApiExtraParams): Promise<boolean> => {
  return axios(`${BACKEND_BASE_API_URL}/reactions/revoke`, {
    method: 'POST',
    data: {
      id: reactionId
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as RevokeReactionApiResponse)
    .then((data) => 'success' in data);
};
