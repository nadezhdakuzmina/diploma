import path from 'path';
import { readEnv, applyToEnv } from './utils/env';

export const CORE_PATH = path.resolve(__dirname, '..');
export const IS_DEV = process.env.MODE === 'dev';
export const ENV_PATH = process.env.ENV_PATH;
export const DEFAULT_ENV_PATH = `${CORE_PATH}/.env.dev`;

if (IS_DEV || ENV_PATH) {
  const envDevPath = ENV_PATH || DEFAULT_ENV_PATH;
  applyToEnv(readEnv(envDevPath));
}

export const HTTP_PORT = Number(process.env.HTTP_PORT);

export const DB_HOST = process.env.POSTGRES_HOST;
export const DB_PORT = Number(process.env.POSTGRES_PORT);
export const DB_USER = process.env.POSTGRES_USER;
export const DB_PASS = process.env.POSTGRES_PASSWORD;
export const DB_BASE = process.env.POSTGRES_DB;

export const ADMINJS_SECRET = process.env.ADMINJS_SECRET;
export const MAX_QUERY_EXECUTION_TIME = 2000;

export const SECRET = process.env.SECRET;
export const DOMAIN = process.env.DOMAIN;

export const VK_ACCESS_TOKEN = process.env.VK_ACCESS_TOKEN;
export const VK_APP_ID = process.env.VK_APP_ID;
