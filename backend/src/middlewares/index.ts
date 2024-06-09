import { json } from 'express';
import { dataSourceMiddlewares } from '@root/application/Database';
import { baseMiddlewares } from './base';
import { setCookieMiddlewares } from './setCookie';
import { corsMiddlewares } from './cors';
import { cookiesMiddlewares } from './cookies';

export const commonMiddlewares = [
  json({ limit: '50mb' }),
  cookiesMiddlewares,
  dataSourceMiddlewares,
  baseMiddlewares,
  corsMiddlewares,
  setCookieMiddlewares,
];
