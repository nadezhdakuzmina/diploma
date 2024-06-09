import { User, createUserAccessTokenByVkAccessToken } from '@entities/User';

import { getUsersInfo } from '@utils/vk/getUserInfo';
import { vkUserAuth } from '@utils/vk/userAuth';

import { USER_ACCESS_TOKEN_COOKIE_NAME } from '@entities/User/constants';

import type { Request, Response } from '@types';

type Payload = {
  type: string;
  uuid: string;
  token: string;
};

type State = {
  redirectUrl: string;
};

type QueryParams = {
  payload: string;
  state: string;
};

type UserInfo = {
  photo_50: string;
  photo_200: string;
};

export const oauth = async (req: Request, res: Response) => {
  const { payload: payloadJSON, state: stateJSON } = req.query as QueryParams;

  try {
    const { type, token, uuid } = JSON.parse(payloadJSON) as Payload;
    const { redirectUrl } = JSON.parse(stateJSON) as State;

    if (type !== 'silent_token') {
      return res.status(400).json({
        error: 'invalid auth type',
      });
    }

    const response = await vkUserAuth(token, uuid);

    if (!response) {
      return res.status(400).json({
        error: 'failed to auth',
      });
    }

    const { accessToken, accessTokenId, userId, expires } = response;

    const { firstName, lastName, photo_50, photo_200 } = (
      await getUsersInfo<UserInfo>([userId], ['photo_50', 'photo_200'])
    )[0];

    let user = await User.findOneBy({ vkId: userId });

    if (!user) {
      user = User.create({ vkId: userId });
    }

    const userAccessToken = createUserAccessTokenByVkAccessToken(accessToken);

    user.firstName = firstName;
    user.lastName = lastName;
    user.photo = photo_50;
    user.photo200 = photo_200;
    user.vkAccessToken = accessToken;
    user.vkAccessTokenId = accessTokenId;
    user.vkAccessTokenExpires = expires;
    user.userAccessToken = userAccessToken;

    await user.save();

    res.setCookie(USER_ACCESS_TOKEN_COOKIE_NAME, userAccessToken, {
      httpOnly: true,
      path: '/',
      sameSite: false,
      secure: true,
      domain: req.domainName,
      expires,
    });

    res.redirect(redirectUrl);
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
};
