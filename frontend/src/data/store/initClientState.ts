import { defaultState as defaultUserState } from '@data/entities/user';
import { defaultState as defaultAppDataState } from '@data/entities/appData';

import type { State } from '../types';

export const initClientState = (): State => {
  return {
    appData: defaultAppDataState,
    user: defaultUserState,
  };
};
