import { initServerState as initUserServerState } from '@data/entities/user';
import { initServerState as initAppDataServerState } from '@data/entities/appData';
import { initServerState as initCountriesServerState } from '@data/entities/countries';
import { initServerState as initCitiesServerState } from '@data/entities/cities';
import { initServerState as initThreadsServerState } from '@data/entities/threads';
import { initServerState as initReactionsServerState } from '@data/entities/reactions';
import { initServerState as initPointsServerState } from '@data/entities/points';
import type { State } from '../types';
import type { Request } from '@types';

export const initServerState = (req: Request): State => {
  return {
    appData: initAppDataServerState(req),
    user: initUserServerState(req),
    countries: initCountriesServerState(req),
    cities: initCitiesServerState(req),
    threads: initThreadsServerState(req),
    reactions: initReactionsServerState(req),
    points: initPointsServerState(req),
  };
};
