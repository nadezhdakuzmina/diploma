import { Router } from 'express';

import { Cities } from '@views';

export const CitiesPath = '/cities';
export const CitiesRouter = Router();

CitiesRouter.get('/city', Cities.getCity);
CitiesRouter.get('/', Cities.getCities);
