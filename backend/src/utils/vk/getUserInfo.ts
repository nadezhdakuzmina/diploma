import axios from 'axios';

import { VK_ACCESS_TOKEN } from '@constants';
import { API_URL, API_VERSION } from './constants';

export type UserInfoApiResponse<E extends {}> = {
  response: (E & {
    id: number;
    first_name?: string;
    last_name?: string;
    can_access_closed?: string;
    is_closed: string;
  })[];
};

export type UserInfo<E extends {}> = Omit<
  E,
  'id' | 'first_name' | 'last_name' | 'can_access_closed' | 'is_closed'
> & {
  id: number;
  firstName: string;
  lastName: string;
};

export const getUsersInfo = async <E extends {}>(
  ids: number[],
  fields: string[]
): Promise<UserInfo<E>[]> => {
  return axios(`${API_URL}/method/users.get`, {
    params: {
      v: API_VERSION,
      access_token: VK_ACCESS_TOKEN,
      user_ids: ids.join(','),
      fields: fields.join(','),
    },
  })
    .then((res) => res.data)
    .then(({ response }: UserInfoApiResponse<E>): UserInfo<E>[] => {
      return response.map(
        ({
          id,
          first_name,
          last_name,
          can_access_closed: _,
          is_closed: __,
          ...other
        }) => ({
          id,
          firstName: first_name,
          lastName: last_name,
          ...other,
        })
      );
    });
};
