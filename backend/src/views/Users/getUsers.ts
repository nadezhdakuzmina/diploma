import { User } from '@entities/User';

import { Request, Response } from '@types';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  res.json({
    users,
  });
};
