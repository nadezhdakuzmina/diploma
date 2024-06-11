import { defaultState } from './defaultState';

import type { Request } from '@types';
import type { CountriesState } from './types';

export const initServerState = (req: Request): CountriesState => {
  const { countries, currentCountry } = defaultState;

  return {
    currentCountry: req.currentCountry || currentCountry,
    countries: req.countries || countries,
  };
};
