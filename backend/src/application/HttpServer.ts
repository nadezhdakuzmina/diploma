import express from 'express';
import cors from 'cors';

import { useDataSource } from './Database';
import { HTTP_PORT } from '@constants';

import type { Express, Router } from 'express';

export const httpServer = express();

httpServer.use(cors());
httpServer.use(useDataSource);
httpServer.use(express.json({ limit: '50mb' }));

export const startServer = (router: Router) =>
  new Promise<Express>((resolve) => {
    httpServer.use('/', router);

    httpServer.listen(HTTP_PORT, () => {
      console.log(`HTTPServer listening on port ${HTTP_PORT}`);
      resolve(httpServer);
    });
  });
