import { Threads } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const threadsMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const countrySlug = req.currentCountry?.slug;
  const citySlug = req.currentCity?.slug;

  const threads = citySlug
    ? await Threads.getThreads(null, citySlug)
    : await Threads.getThreads(countrySlug, null);

  req.threads = threads;

  next();
};
