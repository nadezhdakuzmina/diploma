import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const corsMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader('Access-Control-Allow-Origin', req.baseUrl);
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
};
