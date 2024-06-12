import { userDataMiddleware } from './userData';
import { appDataMiddleware } from './appData';
import { pagesMiddlewares } from './pages';

export const ssrMiddlewares = [
  userDataMiddleware,
  appDataMiddleware,
  pagesMiddlewares,
];

export * from './countries';
export * from './cities';
export * from './threads';
