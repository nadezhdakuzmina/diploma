import { Router } from 'express';

import { Countries } from '@views';

export const CountriesPath = '/countries';
export const CountriesRouter = Router();

CountriesRouter.get('/', Countries.getCountries);
