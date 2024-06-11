import type { Country } from '@types';

export const getCountryUrl = (country: Country): string => {
  return `/country/${country.slug}`;
};
