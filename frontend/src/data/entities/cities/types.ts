import type { City } from '@types';

export type CitiesState = {
  currentCity: City | null;
  cities: City[] | null;
};
