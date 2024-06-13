import axios from 'axios';

import { BACKEND_BASE_API_URL } from '@constants';

import type { ApiExtraParams, UserData } from '@types';

type UserDataApiResponse = {
  user: UserData;
};

export const getUserData = async (extraParams?: ApiExtraParams): Promise<UserData | null> => {
  return axios(`${BACKEND_BASE_API_URL}/users/userdata`, {
    withCredentials: true,
    ...extraParams
  })
    .then((res) => res.data as UserDataApiResponse)
    .then(({ user }) => user);
};
