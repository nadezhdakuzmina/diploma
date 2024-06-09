import { Router } from 'express';

import { UserPath, UserRouter } from './Users';
import { CountriesPath, CountriesRouter } from './Countries';
import { CitiesPath, CitiesRouter } from './Cities';
import { CommonPath, CommonRouter } from './Common';

export const ApiPath = '/api';
export const ApiRouter = Router();

ApiRouter.use(UserPath, UserRouter);
ApiRouter.use(CountriesPath, CountriesRouter);
ApiRouter.use(CitiesPath, CitiesRouter);
ApiRouter.use(CommonPath, CommonRouter);
