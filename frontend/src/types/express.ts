import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

import type { UserData } from './user';
import type { AppData } from './common';

export interface Request extends ExpressRequest {
  userData: UserData | null;
  appData: AppData;
}

export interface Response extends ExpressResponse {}
