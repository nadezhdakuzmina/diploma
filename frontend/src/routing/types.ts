import type { Middleware } from '@types';
import type { RouteObject } from 'react-router-dom';

export type ExtendedRouteObject = RouteObject & {
  middlewares?: Middleware[];
};
