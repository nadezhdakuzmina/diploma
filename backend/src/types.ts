import type { SetCookieParams } from '@utils/setCookie';
import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import type { DataSource } from 'typeorm';

export interface Request extends ExpressRequest {
  dataSource: DataSource;
  apiBaseUrl: string;
  domainName: string;
  cookies: Record<string, string>;
}

export interface Response extends ExpressResponse {
  setCookie: (key: string, value: string, params?: SetCookieParams) => void;
}
