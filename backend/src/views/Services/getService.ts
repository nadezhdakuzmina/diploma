import { Service } from '@entities/Service';

import type { Request, Response } from '@types';

type QueryParams = {
  id: string;
};

export const getService = async (req: Request, res: Response) => {
  const { id: strId } = req.query as QueryParams;

  if (!strId) {
    return res.status(400).json({
      error: 'id is not defined',
    });
  }

  const id = Number(strId);

  if (!id) {
    return res.status(400).json({
      error: 'invalid id presented',
    });
  }

  try {
    const service = await Service.createQueryBuilder('service')
      .leftJoinAndSelect('service.city', 'city')
      .leftJoinAndSelect('service.country', 'country')
      .leftJoinAndSelect('service.tags', 'tag')
      .leftJoinAndSelect('service.user', 'user')
      .leftJoinAndSelect('service.logo', 'logo')
      .leftJoinAndSelect('service.comments', 'comment')
      .leftJoinAndSelect('comment.user', 'commentUser')
      .select([
        'service.id',
        'service.name',
        'service.description',
        'service.date',
        'city',
        'country',
        'tag',
        'logo',
        'comment',
        'commentUser.id',
        'commentUser.firstName',
        'commentUser.lastName',
        'commentUser.photo',
        'commentUser.photo200',
        'user.id',
        'user.firstName',
        'user.lastName',
        'user.photo',
        'user.photo200',
      ])
      .where({ id })
      .getOne();

    res.json({
      service,
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
