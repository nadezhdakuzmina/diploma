import { MapPoint, PointCategory } from '@entities/MapPoint';
import { User } from '@entities/User';

import type { Request, Response } from '@types';

type QueryParams = {
  citySlug: string;
  type: PointCategory;
};

type Filter = {
  type: PointCategory;
  city: { slug: string };
  moderated: boolean;
  user?: User;
};

export const getPoints = async (req: Request, res: Response) => {
  const { citySlug, type } = req.query as QueryParams;
  const { authUser: user } = req;

  if (!citySlug || !type) {
    return res.json({
      error: 'citySlug and type are required',
    });
  }

  if (!Object.values(PointCategory).includes(type)) {
    return res.json({
      error: 'invalid type',
    });
  }

  try {
    const filters: Filter[] = [
      {
        type,
        city: { slug: citySlug },
        moderated: true,
      },
    ];

    if (user) {
      filters.push({
        type,
        city: { slug: citySlug },
        moderated: false,
        user,
      });
    }

    const points = await MapPoint.createQueryBuilder('mapPoint')
      .leftJoinAndSelect('mapPoint.city', 'city')
      .leftJoinAndSelect('mapPoint.images', 'image')
      .select([
        'mapPoint.id',
        'mapPoint.name',
        'mapPoint.description',
        'mapPoint.type',
        'mapPoint.lng',
        'mapPoint.lat',
        'mapPoint.moderated',
        'image',
      ])
      .where(filters)
      .getMany();

    res.json({
      points,
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
