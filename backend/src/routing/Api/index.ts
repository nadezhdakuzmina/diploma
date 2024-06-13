import { Router } from 'express';

import { UserPath, UserRouter } from './Users';
import { CountriesPath, CountriesRouter } from './Countries';
import { CitiesPath, CitiesRouter } from './Cities';
import { CommonPath, CommonRouter } from './Common';
import { ThreadsPath, ThreadsRouter } from './Threads';
import { ReactionsPath, ReactionsRouter } from './Reactions';
import { MapPointsPath, MapPointsRouter } from './MapPoints';
import { SearchPath, SearchRouter } from './Search';
import { ServicesPath, ServicesRouter } from './Services';

export const ApiPath = '/api';
export const ApiRouter = Router();

ApiRouter.use(UserPath, UserRouter);
ApiRouter.use(CountriesPath, CountriesRouter);
ApiRouter.use(CitiesPath, CitiesRouter);
ApiRouter.use(CommonPath, CommonRouter);
ApiRouter.use(ThreadsPath, ThreadsRouter);
ApiRouter.use(ReactionsPath, ReactionsRouter);
ApiRouter.use(MapPointsPath, MapPointsRouter);
ApiRouter.use(SearchPath, SearchRouter);
ApiRouter.use(ServicesPath, ServicesRouter);
