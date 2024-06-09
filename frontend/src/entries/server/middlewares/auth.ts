import { User } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const authMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const headers: Record<string, string> = {};

  for (let i = 0; i < req.rawHeaders.length; i += 2) {
    const key = req.rawHeaders[i];
    const value = req.rawHeaders[i + 1];

    headers[key] = value;
  }

  const userData = await User.getUserData({
    headers,
  }).catch((error) => {
    console.error('Fetching userData error', error);
    return null;
  });

  req.userData = userData;

  next();
};
