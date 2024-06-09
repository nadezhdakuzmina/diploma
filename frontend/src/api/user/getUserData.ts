import axios from 'axios';

import type { ApiExtraParams, UserData } from '@types';
import { BACKEND_BASE_URL } from '@constants';

type UserDataApiResponse = {
  user: UserData;
};

export const getUserData = async (extraParams?: ApiExtraParams): Promise<UserData | null> => {
  return axios(`${BACKEND_BASE_URL}/users/getUserData`, {
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as UserDataApiResponse)
    .then(({ user }) => user);
};
