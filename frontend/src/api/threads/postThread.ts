import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams } from '@types';

type PostThreadApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const postThread = async (
  text: string,
  tags: string[],
  countrySlug?: string,
  citySlug?: string,
  extraParams?: ApiExtraParams
): Promise<boolean> => {
  return axios(`${BACKEND_BASE_URL}/threads/thread`, {
    method: 'POST',
    data: {
      text,
      tags,
      citySlug,
      countrySlug,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as PostThreadApiResponse)
    .then((data) => 'success' in data);
};
