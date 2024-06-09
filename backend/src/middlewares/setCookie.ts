import { setCookie } from '@utils/setCookie';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const setCookieMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setCookie = (...args) => setCookie(res, ...args);

  next();
};
