import { User } from '@entities/User';
import { USER_ACCESS_TOKEN_COOKIE_NAME } from '@entities/User/constants';

import type { Request, Response } from '@types';

export const getUserData = async (req: Request, res: Response) => {
  const userAccessToken = req.cookies[USER_ACCESS_TOKEN_COOKIE_NAME];

  const user = await User.findOneBy({ userAccessToken });

  if (!user) {
    return res.json({
      user: null,
    });
  }

  res.json({
    user: {
      id: user.id,
      vkId: user.vkId,
      photo: user.photo,
      photo200: user.photo200,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
};
