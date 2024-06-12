import { City } from '@entities/City';

import type { Request, Response } from '@types';

type QueryParams = {
  citySlug?: string;
};

export const getCity = async (req: Request, res: Response) => {
  const { citySlug } = req.query as QueryParams;

  if (!citySlug) {
    return res.status(400).json({
      error: 'citySlug is not defined',
    });
  }

  try {
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
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
};
