import { defaultState } from './defaultState';

import type { Request } from '@types';
import type { ReactionsState } from './types';

export const initServerState = (req: Request): ReactionsState => {
  const { reactions } = defaultState;

  return {
    reactions: req.reactions || reactions,
  };
};
