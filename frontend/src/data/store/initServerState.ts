import { initServerState as initUserServerState } from '@data/entities/user';

import type { State } from '../types';
import type { Request } from '@types';

export const initServerState = (req: Request): State => {
  return {
    user: initUserServerState(req),
  };
};
