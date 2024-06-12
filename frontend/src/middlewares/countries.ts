import { Countries } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const countriesMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const countries = await Countries.getCountries();

    req.countries = countries;
  } catch(error) {
    console.error(error);
  }

  next();
};

export const currentCountryMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const { country: countrySlug } = req.routerParams;

    if (!countrySlug) {
      return next();
    }
    
    const country = await Countries.getCountry(countrySlug);

    req.currentCountry = country;
  } catch(error) {
    console.error(error);
  }

  next();
};
