import { Country } from '@entities/Country';

import { Request, Response } from '@types';

export const getCountries = async (req: Request, res: Response) => {
  const countries = await Country.find({
    relations: {
      logo: true,
    },
  });

  res.json({
    countries,
  });
};
