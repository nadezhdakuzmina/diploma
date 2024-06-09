import { City } from '@entities/City';

import { Request, Response } from '@types';

type QueryPrams = {
  countryId: string;
};

export const getCities = async (req: Request, res: Response) => {
  const { countryId } = req.query as QueryPrams;

  if (!countryId) {
    return res.status(400).json({
      error: 'countryId is not provided',
    });
  }

  const cities = await City.find({
    where: {
      countryId: Number(countryId),
    },
    relations: {
      logo: true,
    },
  });

  res.json({
    cities,
  });
};
