import { Router } from 'express';

import { Cities } from '@views';

export const CitiesPath = '/cities';
export const CitiesRouter = Router();

CitiesRouter.get('/', Cities.getCities);
