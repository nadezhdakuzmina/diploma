import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams, PointCategory } from '@types';

type PostPointApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const postPoint = async (
  name: string,
  description: string,
  // images: string[];
  type: PointCategory,
  citySlug: string,
  tags: string[],
  lng: number,
  lat: number,
  extraParams?: ApiExtraParams
): Promise<boolean> => {
  return axios(`${BACKEND_BASE_URL}/points/point`, {
    method: 'POST',
    data: {
      name,
      description,
      type,
      tags,
      lng,
      lat,
      citySlug,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as PostPointApiResponse)
    .then((data) => 'success' in data);
};
