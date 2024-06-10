import { defaultState } from './defaultState';

import type { AppDataState } from './types';
import type { Request } from '@types';

export const initServerState = (req: Request): AppDataState | null => {
  return req.appData || defaultState;
};
