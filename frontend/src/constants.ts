import { resolve } from 'path';

export const BASE_PATH = resolve(__dirname, '../');

export const IS_PRODUCTION = process.env.isProduction;
export const BUILD = process.env.BUILD;

export const SERVER_PORT = 3000;
export const STATIC_PATH = `${BASE_PATH}/public`;
export const INDEX_PATH = `${STATIC_PATH}/index.html`;

export const PRELOADED_STATE_KEY = '__PRELOADED_STATE__';

export const SSL = process.env.SSL === 'true';
export const DOMAIN = process.env.DOMAIN || 'localhost:9090';
export const BACKEND_UPSTREAM = process.env.BACKEND_UPSTREAM || 'http://localhost:9090';

const scheme = SSL ? 'https' : 'http';
export const BACKEND_URL = BUILD === 'client'
  ? `${scheme}://${DOMAIN}`
  : `http://${BACKEND_UPSTREAM}`;

export const BACKEND_BASE_API_URL = `${BACKEND_URL}/api`;
export const BACKEND_BASE_STATIC_URL = `${BACKEND_URL}/static`;
