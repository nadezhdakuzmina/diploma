import { Router } from 'express';

import { AdminPath, AdminRouter } from './Admin';
import { ApiPath, ApiRouter } from './Api';
import { apiMiddlewares } from '@root/middlewares';

export const mainRouter = Router();

mainRouter.use(AdminPath, AdminRouter);
mainRouter.use(ApiPath, [...apiMiddlewares, ApiRouter]);
