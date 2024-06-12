import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams, Point, PointCategory } from '@types';

type PointsApiResponse = {
  points: Point[];
};

export const getPoints = async (citySlug: string, type: PointCategory, extraParams?: ApiExtraParams): Promise<Point[]> => {
  return axios(`${BACKEND_BASE_URL}/points`, {
    params: {
      citySlug,
      type,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as PointsApiResponse)
    .then(({ points }) => points);
};
