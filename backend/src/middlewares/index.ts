import { json } from 'express';
import { dataSourceMiddlewares } from '@root/application/Database';
import { commonMiddlewares } from './common';
import { setCookieMiddlewares } from './setCookie';
import { corsMiddlewares } from './cors';
import { cookiesMiddlewares } from './cookies';

export const apiMiddlewares = [
  json({ limit: '50mb' }),
  cookiesMiddlewares,
  dataSourceMiddlewares,
  commonMiddlewares,
  corsMiddlewares,
  setCookieMiddlewares,
];
