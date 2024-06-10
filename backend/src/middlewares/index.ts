import { json } from 'express';
import cors from 'cors';
import { dataSourceMiddlewares } from '@root/application/Database';
import { baseMiddlewares } from './base';
import { setCookieMiddlewares } from './setCookie';
import { cookiesMiddlewares } from './cookies';

export const commonMiddlewares = [
  json({ limit: '50mb' }),
  cors({
    credentials: true,
    preflightContinue: true,
    origin: true,
  }),
  cookiesMiddlewares,
  dataSourceMiddlewares,
  baseMiddlewares,
  setCookieMiddlewares,
];
