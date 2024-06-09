import express from 'express';

import { HTTP_PORT } from '@constants';

import type { Express, Router } from 'express';

export const httpServer = express();

export const startServer = (router: Router) =>
  new Promise<Express>((resolve) => {
    httpServer.use('/', router);

    httpServer.listen(HTTP_PORT, () => {
      console.log(`HTTPServer listening on port ${HTTP_PORT}`);
      resolve(httpServer);
    });
  });
