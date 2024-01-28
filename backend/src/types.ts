import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import type { DataSource } from 'typeorm';

export interface Request extends ExpressRequest {
  dataSource: DataSource;
}

export type Response = ExpressResponse;
