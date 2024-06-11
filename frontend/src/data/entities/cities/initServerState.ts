import { defaultState } from './defaultState';

import type { Request } from '@types';
import type { CitiesState } from './types';

export const initServerState = (req: Request): CitiesState => {
  const { cities, currentCity } = defaultState;

  return {
    currentCity: req.currentCity || currentCity,
    cities: req.cities || cities,
  };
};
