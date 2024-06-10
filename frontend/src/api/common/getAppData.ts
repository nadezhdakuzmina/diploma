import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams } from '@types';
import type { AppData } from '@types';

type AppDataApiResponse = AppData;

export const getAppData = async (extraParams?: ApiExtraParams): Promise<AppData> => {
  return axios(`${BACKEND_BASE_URL}/common/appdata`, {
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as AppDataApiResponse);
};
