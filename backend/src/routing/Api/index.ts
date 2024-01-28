import { Router } from 'express';

import { UserPath, UserRouter } from './Users';

export const ApiPath = '/api';
export const ApiRouter = Router();

ApiRouter.use(UserPath, UserRouter);
