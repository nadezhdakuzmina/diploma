import { City } from '@entities/City';

import type { Request, Response } from '@types';

type QueryParams = {
  countryId?: string;
  countrySlug?: string;
};

export const getCities = async (req: Request, res: Response) => {
  const { countryId: countryIdStr, countrySlug } = req.query as QueryParams;

  const countryId = Number(countryIdStr);
  if (countryIdStr && isNaN(countryId)) {
    return res.status(400).json({
      error: 'countryId is not a number',
    });
  }

  try {
    let cities: City[];

    if (countryId) {
      cities = await City.find({
        where: {
          countryId,
        },
        relations: {
          logo: true,
          tags: true,
        },
      });
    } else if (countrySlug) {
      cities = await City.find({
        where: {
          country: {
            slug: countrySlug,
          },
        },
        relations: {
          logo: true,
          tags: true,
        },
      });
    } else {
      return res.status(400).json({
        error: 'countryId or countrySlug not provided',
      });
    }

    res.json({
      cities,
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
