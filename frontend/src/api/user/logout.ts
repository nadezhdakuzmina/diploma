import axios from 'axios';

import { BACKEND_BASE_URL } from '@constants';

import type { ApiExtraParams } from '@types';

type LogoutApiResponse = {
  success: boolean;
} | {
  error: string;
};

export const logout = async (extraParams?: ApiExtraParams): Promise<boolean> => {
  return axios(`${BACKEND_BASE_URL}/users/logout`, {
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as LogoutApiResponse)
    .then((data) => 'success' in data);
};
