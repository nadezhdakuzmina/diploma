import { MapPoint, PointCategory } from '@entities/MapPoint';
import { User } from '@entities/User';

import type { Request, Response } from '@types';

type QueryParams = {
  id: string;
};

type Filter = {
  id: number;
  moderated: boolean;
  user?: User;
};

export const getPoint = async (req: Request, res: Response) => {
  const { id: pointIdStr } = req.query as QueryParams;
  const { authUser: user } = req;

  const pointId = Number(pointIdStr);

  if (!pointId) {
    return res.json({
      error: 'pointId is required',
    });
  }

  try {
    const filters: Filter[] = [
      {
        id: pointId,
        moderated: true,
      },
    ];

    if (user) {
      filters.push({
        id: pointId,
        moderated: false,
        user,
      });
    }

    const point = await MapPoint.createQueryBuilder('mapPoint')
      .leftJoinAndSelect('mapPoint.city', 'city')
      .leftJoinAndSelect('mapPoint.user', 'user')
      .leftJoinAndSelect('mapPoint.tags', 'tag')
      .leftJoinAndSelect('mapPoint.comments', 'comment')
      .leftJoinAndSelect('comment.user', 'commentUser')
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
        'comment',
        'commentUser.id',
        'commentUser.firstName',
        'commentUser.lastName',
        'commentUser.photo',
        'commentUser.photo200',
        'city',
        'tag',
        'user.id',
        'user.firstName',
        'user.lastName',
        'user.photo',
        'user.photo200',
      ])
      .where(filters)
      .getOne();

    res.json({
      point,
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
