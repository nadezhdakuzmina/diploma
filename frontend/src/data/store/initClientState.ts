import { defaultState as defaultUserState } from '@data/entities/user';
import { defaultState as defaultAppDataState } from '@data/entities/appData';
import { defaultState as defaultCountriesState } from '@data/entities/countries';
import { defaultState as defaultCitiesState } from '@data/entities/cities';
import { defaultState as defaultThreadsState } from '@data/entities/threads';
import { defaultState as defaultReactionsState } from '@data/entities/reactions';

import type { State } from '../types';

export const initClientState = (): State => {
  return {
    appData: defaultAppDataState,
    user: defaultUserState,
    countries: defaultCountriesState,
    cities: defaultCitiesState,
    threads: defaultThreadsState,
    reactions: defaultReactionsState,
  };
};
