import type { Country } from '@types';

export type CountriesState = {
  currentCountry: Country | null;
  countries: Country[] | null;
};
