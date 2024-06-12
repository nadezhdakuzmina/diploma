import { Cities } from '@api';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const citiesMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const countrySlug = req.currentCountry?.slug;

    if (!countrySlug) {
      return next();
    }

    const cities = await Cities.getCities(countrySlug);

    req.cities = cities;

  } catch(error) {
    console.error(error);
  }

  next();
};

export const currentCityMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const { city: citySlug } = req.routerParams;

    if (!citySlug) {
      return next();
    }
    
    const city = await Cities.getCity(citySlug);

    req.currentCity = city;
  } catch(error) {
    console.error(error);
  }

  next();
};
