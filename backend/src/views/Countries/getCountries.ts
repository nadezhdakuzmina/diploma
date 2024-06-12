import { Country } from '@entities/Country';

import type { Request, Response } from '@types';

export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await Country.find({
      relations: {
        logo: true,
        tags: true,
      },
    });

    res.json({
      countries,
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
