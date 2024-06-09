import { getCookies } from '@utils/getCookies';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const cookiesMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.cookies = getCookies(req);

  next();
};
