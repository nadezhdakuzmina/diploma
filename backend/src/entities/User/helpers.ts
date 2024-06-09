import md5 from 'md5';

import { ADMINJS_SECRET, SECRET } from '@constants';
import { USER_ACCESS_TOKEN_COOKIE_NAME } from './constants';

import type { Request, Response } from '@types';

export const hashPassword = async (password: string) =>
  md5(`${ADMINJS_SECRET}:${password}`);

export const createUserAccessTokenByVkAccessToken = (vkAccessToken: string) => {
  return md5(`${SECRET}:${vkAccessToken}`);
};
