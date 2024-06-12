import { authenticate } from '@entities/User/authentication';

import type { Request, Response } from '@types';

export const getUserData = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
};
