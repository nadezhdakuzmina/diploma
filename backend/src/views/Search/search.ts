import { Country } from '@entities/Country';
import { City } from '@entities/City';
import { ILike } from 'typeorm';

import type { Request, Response } from '@types';
import { mergeCountriesAndCities } from '@utils/mergeCountriesAndCities';

type QueryParams = {
  query: string;
};

export const search = async (req: Request, res: Response) => {
  const { query } = req.query as QueryParams;

  if (!query) {
    return res.status(400).json({
      error: 'query is not defined',
    });
  }

  try {
    const countries = await Country.find({
      relations: {
        cities: true,
      },
      where: {
        name: ILike(`%${query}%`),
      },
    });

    const cities = await City.find({
      relations: {
        country: true,
      },
      where: {
        name: ILike(`%${query}%`),
      },
    });

    const mergedCountries = mergeCountriesAndCities(countries, cities);

    if (mergedCountries.length < 2) {
      return res.json({
        countries: mergedCountries,
      });
    }

    const totalEntities = mergedCountries.reduce((acc, country) => {
      return acc + 1 + country.cities.length;
    }, 0);

    if (totalEntities < 8) {
      return res.json({
        countries: mergedCountries,
      });
    }

    return res.json({
      countries: countries.map(({ cities, ...other }) => ({ ...other })),
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
};
