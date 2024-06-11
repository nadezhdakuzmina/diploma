import { initServerState as initUserServerState } from '@data/entities/user';
import { initServerState as initAppDataServerState } from '@data/entities/appData';
import { initServerState as initCountriesServerState } from '@data/entities/countries';
import { initServerState as initCitiesServerState } from '@data/entities/cities';

import type { State } from '../types';
import type { Request } from '@types';

export const initServerState = (req: Request): State => {
  return {
    appData: initAppDataServerState(req),
    user: initUserServerState(req),
    countries: initCountriesServerState(req),
    cities: initCitiesServerState(req),
  };
};
