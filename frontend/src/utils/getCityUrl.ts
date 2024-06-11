import type { City, Country } from '@types';

export const getCityUrl = (country: Country, city: City): string => {
  return `/country/${country.slug}/city/${city.slug}`;
};
