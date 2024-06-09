import { defaultState } from './defaultState';

import type { UserData } from '@types';
import type { Request } from '@types';

export const initServerState = (req: Request): UserData | null => {
  return req.userData || defaultState;
};
