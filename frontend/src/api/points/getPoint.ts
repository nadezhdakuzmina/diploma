import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, FullPoint, PointCategory } from '@types';

type PointApiResponse = {
  point: FullPoint;
};

export const getPoint = async (pointId: number, extraParams?: ApiExtraParams): Promise<FullPoint> => {
  return axios(`${BACKEND_BASE_API_URL}/points/point`, {
    params: {
      id: pointId,
    },
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as PointApiResponse)
    .then(({ point }) => point);
};
