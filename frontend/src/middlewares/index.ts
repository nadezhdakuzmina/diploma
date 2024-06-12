import { userDataMiddleware } from './userData';
import { appDataMiddleware } from './appData';
import { pagesMiddlewares } from './pages';
import { headersMiddleware } from './headers';
import { reactionsMiddleware } from './reactions';

export const ssrMiddlewares = [
  headersMiddleware,
  userDataMiddleware,
  reactionsMiddleware,
  appDataMiddleware,
  pagesMiddlewares,
];

export * from './countries';
export * from './cities';
export * from './threads';
