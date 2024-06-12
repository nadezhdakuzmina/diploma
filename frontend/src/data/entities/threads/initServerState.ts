import { defaultState } from './defaultState';

import type { Request } from '@types';
import type { ThreadsState } from './types';

export const initServerState = (req: Request): ThreadsState => {
  const { threads } = defaultState;

  return {
    threads: req.threads || threads,
    currentThread: null,
  };
};
