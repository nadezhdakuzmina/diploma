import { DOMAIN, IS_DEV } from '@constants';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const baseMiddlewares = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const scheme = IS_DEV ? 'http://' : 'https://';

  req.apiBaseUrl = `${scheme}${DOMAIN}/api`;
  req.staticBaseUrl = `${scheme}${DOMAIN}/static`;
  req.domainName = DOMAIN;

  next();
};
