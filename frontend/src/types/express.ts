import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction,
} from 'express';

import type { UserData } from './user';
import type { AppData } from './common';
import type { Country } from './countries';
import type { City } from './cities';
import type { Thread } from './threads';
import type { ReactionRecord } from './reactions';
import { Point } from './points';

export interface Request extends ExpressRequest {
  userData: UserData | null;
  appData: AppData;
  countries: Country[];
  currentCountry: Country;
  cities: City[];
  currentCity: City;
  threads: Thread[];
  points: Point[];
  reactions: ReactionRecord;
  headers: Record<string, string>;
  routerParams?: Record<string, string>;
}

export interface Response extends ExpressResponse {}

export type Middleware = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
