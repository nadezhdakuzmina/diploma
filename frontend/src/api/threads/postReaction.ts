import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams } from '@types';

type CommentApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const postReaction = async (threadId: number, extraParams?: ApiExtraParams): Promise<boolean> => {
  return axios(`${BACKEND_BASE_URL}/threads/reaction`, {
    method: 'POST',
    data: {
      threadId,
      type: 'Like',
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as CommentApiResponse)
    .then((data) => 'success' in data);
};
