import { Services } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const servicesMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const countrySlug = req.currentCountry?.slug;
    const citySlug = req.currentCity?.slug;

    const extraParams = {
      headers: req.headers,
    };

    const services = citySlug
      ? await Services.getServices(null, citySlug, extraParams)
      : await Services.getServices(countrySlug, null, extraParams);

    req.services = services;
  } catch(error) {
    console.error(error);
  }

  next();
};
