import { Country } from '@entities/Country';

import type { Request, Response } from '@types';

type QueryParams = {
  countrySlug?: string;
};

export const getCountry = async (req: Request, res: Response) => {
  const { countrySlug } = req.query as QueryParams;

  if (!countrySlug) {
    return res.json({
      error: 'countrySlug is not defined',
    });
  }

  const country = await Country.findOne({
    where: {
      slug: countrySlug,
    },
    relations: {
      logo: true,
      tags: true,
    },
  });

  res.json({
    country,
  });
};
