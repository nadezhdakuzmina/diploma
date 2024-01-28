import axios from 'axios';

import { RESOURCE_URL } from './constants';

import type { User } from '@data/types/entities/user';

export const fetchUsers = async (): Promise<User[]> => {
  return axios(RESOURCE_URL)
    .then((res) => res.data)
    .then((data) => data.users as User[]);
};
