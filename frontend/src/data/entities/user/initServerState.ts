import { defaultState } from './defaultState';

import type { Request } from '@types';
import type { UserState } from './types';

export const initServerState = (req: Request): UserState | null => {
  return req.userData || defaultState;
};
