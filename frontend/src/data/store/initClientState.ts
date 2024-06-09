import { defaultState as defaultUserState } from '@data/entities/user';

import type { State } from '../types';

export const initClientState = (): State => {
  return {
    user: defaultUserState,
  };
};
