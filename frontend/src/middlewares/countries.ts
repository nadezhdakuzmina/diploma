import { Countries } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const countriesMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const countries = await Countries.getCountries();

  req.countries = countries;

  next();
};

export const currentCountryMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  const { country: countrySlug } = req.routerParams;

  if (!countrySlug) {
    return next();
  }
  
  const country = await Countries.getCountry(countrySlug);

  req.currentCountry = country;

  next();
};
