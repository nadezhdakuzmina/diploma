import { authenticate } from '@entities/User/authentication';

import { USER_ACCESS_TOKEN_COOKIE_NAME } from '@entities/User/constants';

import type { Request, Response } from '@types';

export const logout = async (req: Request, res: Response) => {
  const user = await authenticate(req);

  if (!user) {
    return res.json({
      error: 'not logged in',
    });
  }

  user.userAccessToken = null;
  await user.save();

  res.setCookie(USER_ACCESS_TOKEN_COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    sameSite: false,
    secure: true,
    domain: req.domainName,
    maxAge: 0,
  });

  res.json({
    success: true,
  });
};
