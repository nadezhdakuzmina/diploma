import { userDataMiddleware } from './userData';
import { appDataMiddleware } from './appData';

export const ssrMiddlewares = [
  userDataMiddleware,
  appDataMiddleware,
];
