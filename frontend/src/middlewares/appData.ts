import { Common } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const appDataMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const appData = await Common.getAppData();

    req.appData = appData;
  } catch(error) {}

  next();
};
