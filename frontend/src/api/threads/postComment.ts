import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams } from '@types';

type CommentApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const postComment = async (threadId: number, text: string, extraParams?: ApiExtraParams): Promise<boolean> => {
  return axios(`${BACKEND_BASE_URL}/threads/comment`, {
    method: 'POST',
    data: {
      threadId,
      text,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as CommentApiResponse)
    .then((data) => 'success' in data);
};
