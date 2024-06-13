import type { City } from '@entities/City';
import type { Country } from '@entities/Country';

export const mergeCountriesAndCities = (
  countries: Country[],
  cities: City[]
): Country[] => {
  const mergedCountriesMap = new Map<number, Country>();

  cities.forEach((city) => {
    const { country } = city;
    const { id: countryId } = country;
    delete city.country;

    const mergedCountry = mergedCountriesMap.get(countryId) || country;

    mergedCountry.cities ||= [];
    mergedCountry.cities = [...mergedCountry.cities, city];

    mergedCountriesMap.set(countryId, mergedCountry);
  });

  countries.forEach((country) => {
    const { id: countryId, cities } = country;

    delete country.cities;
    const mergedCountry = mergedCountriesMap.get(countryId) || country;

    mergedCountry.cities ||= [];
    mergedCountry.cities = [...mergedCountry.cities, ...cities];

    mergedCountriesMap.set(countryId, mergedCountry);
  });

  return Array.from(mergedCountriesMap.values());
};
