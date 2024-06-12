import { authenticate } from '@entities/User/authentication';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await authenticate(req);

  req.authUser = user;

  next();
};
