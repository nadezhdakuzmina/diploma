import { User } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const userDataMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const userData = await User.getUserData({
      headers: req.headers,
    }).catch((error) => {
      console.error('Fetching userData error', error);
      return null;
    });
  
    req.userData = userData;
  } catch(error) {
    console.error(error);
  }

  next();
};
