import { authenticate } from '@entities/User/authentication';

import type { Request, Response } from '@types';

export const getUserData = async (req: Request, res: Response) => {
  const user = await authenticate(req);

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
