import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

type View = (
  req: Request,
  res: Response,
  next: NextFunction
) => unknown | Promise<unknown>;

export const requireAuth = (view: View) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { authUser: user } = req;

    if (!user) {
      return res.status(401).json({
        error: 'auth requires',
      });
    }

    return view(req, res, next);
  };
};
