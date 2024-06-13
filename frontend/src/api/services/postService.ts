import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams } from '@types';

type PostServiceApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const postService = async (
  name: string,
  description: string,
  tags: string[],
  logoId: number,
  countrySlug?: string,
  citySlug?: string,
  extraParams?: ApiExtraParams
): Promise<boolean> => {
  return axios(`${BACKEND_BASE_API_URL}/services/service`, {
    method: 'POST',
    data: {
      name,
      description,
      tags,
      logoId,
      citySlug,
      countrySlug,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as PostServiceApiResponse)
    .then((data) => 'success' in data);
};
