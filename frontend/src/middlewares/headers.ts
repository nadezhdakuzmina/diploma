import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const headersMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const headers: Record<string, string> = {};

  for (let i = 0; i < req.rawHeaders.length; i += 2) {
    const key = req.rawHeaders[i];
    const value = req.rawHeaders[i + 1];

    headers[key] = value;
  }

  req.headers = headers;

  next();
};
