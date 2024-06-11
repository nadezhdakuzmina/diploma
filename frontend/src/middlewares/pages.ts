import { PathMatch, matchPath } from 'react-router';
import { routes } from '@routing';

import type { Request, Response } from '@types';
import type { NextFunction } from 'express';

export const pagesMiddlewares = async (req: Request, res: Response, next: NextFunction) => {
  const url = req.originalUrl.replace(/\?.+$/, '');

  let pathMatch: PathMatch;
  const matchedRouter = routes.find(({ path }) => {
    return Boolean(pathMatch = matchPath(path, url));
  });

  if (!matchedRouter) {
    return next();
  }

  req.routerParams = pathMatch.params;

  for (let middleware of matchedRouter.middlewares || []) {
    const nextFunction = (...args: unknown[]) => {
      if (args.length) {
        return next(...args);
      }
    };

    await middleware(req, res, nextFunction);
  }

  next();
};
