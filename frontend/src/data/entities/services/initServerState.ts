import { defaultState } from './defaultState';

import type { Request } from '@types';
import type { ServicesState } from './types';

export const initServerState = (req: Request): ServicesState => {
  const { services } = defaultState;

  return {
    services: req.services || services,
    currentService: null,
  };
};
