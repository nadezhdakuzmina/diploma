import { City } from '@entities/City';

import type { Request, Response } from '@types';

type QueryParams = {
  citySlug?: string;
};

export const getCity = async (req: Request, res: Response) => {
  const { citySlug } = req.query as QueryParams;

  if (!citySlug) {
    return res.json({
      error: 'citySlug is not defined',
    });
  }

  const city = await City.findOne({
    where: {
      slug: citySlug,
    },
    relations: {
      logo: true,
      tags: true,
    },
  });

  res.json({
    city,
  });
};
