import { authMiddleware } from './auth';

export const ssrMiddlewares = [
  authMiddleware,
];
