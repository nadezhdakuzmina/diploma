import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

import type { UserData } from './user';

export interface Request extends ExpressRequest {
  userData: UserData | null;
}

export interface Response extends ExpressResponse {}
