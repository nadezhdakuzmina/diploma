import axios from 'axios';

import { VK_ACCESS_TOKEN } from '@constants';
import { API_URL, API_VERSION } from './constants';

export type AuthApiResponse =
  | {
      response: {
        access_token: string;
        access_token_id: string;
        user_id: number;
        additional_signup_required: boolean;
        is_partial: boolean;
        is_service: boolean;
        source: number;
        source_description: string;
        expires_in: number;
      };
    }
  | {
      error: {
        error_code: number;
        error_msg: string;
      };
    };

export type AuthResult = {
  accessToken: string;
  accessTokenId: number;
  userId: number;
  expires: Date;
};

export const vkUserAuth = async (
  silentToken: string,
  uuid: string
): Promise<AuthResult> => {
  return axios(`${API_URL}/method/auth.exchangeSilentAuthToken`, {
    params: {
      v: API_VERSION,
      token: silentToken,
      access_token: VK_ACCESS_TOKEN,
      uuid,
    },
  })
    .then((res) => res.data)
    .then((data: AuthApiResponse) => {
      if ('error' in data) {
        throw new Error(data.error.error_msg);
      }

      return {
        accessToken: data.response.access_token,
        accessTokenId: Number(data.response.access_token_id),
        userId: data.response.user_id,
        expires: new Date(Date.now() + data.response.expires_in * 1000),
      };
    });
};
