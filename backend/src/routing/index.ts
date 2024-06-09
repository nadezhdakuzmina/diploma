import { Router } from 'express';

import { AdminPath, AdminRouter } from './Admin';
import { ApiPath, ApiRouter } from './Api';
import { commonMiddlewares } from '@root/middlewares';

export const mainRouter = Router();

mainRouter.use(AdminPath, [...commonMiddlewares, AdminRouter]);
mainRouter.use(ApiPath, [...commonMiddlewares, ApiRouter]);
