import express from 'express';

import { ssr } from './ssr';
import { STATIC_PATH } from '@constants';
import { ssrMiddlewares } from './middlewares';

export const mainRouter = express.Router();

const staticRouter = express.Router();
const ssrRouter = express.Router();

mainRouter.use('/static', staticRouter);
mainRouter.use('/', ssrRouter);

staticRouter.get('*', express.static(STATIC_PATH));

ssrRouter.use(ssrMiddlewares);
ssrRouter.get('*', ssr);
