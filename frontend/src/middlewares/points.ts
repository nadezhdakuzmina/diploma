import { Points } from '@api';

import { PointCategory, type Request, type Response } from '@types';
import type { NextFunction } from 'express';

export const pointsMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const citySlug = req.currentCity?.slug;

    const points = await Points.getPoints(
      citySlug,
      PointCategory.Popular,
      {
        headers: req.headers,
      },
    );

    req.points = points;
  } catch(error) {
    console.error(error);
  }

  next();
};
