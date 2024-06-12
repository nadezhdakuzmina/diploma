import { Country } from '@entities/Country';

import type { Request, Response } from '@types';

type QueryParams = {
  countrySlug?: string;
};

export const getCountry = async (req: Request, res: Response) => {
  const { countrySlug } = req.query as QueryParams;

  if (!countrySlug) {
    return res.status(400).json({
      error: 'countrySlug is not defined',
    });
  }

  try {
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
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
};
