import { Service } from '@entities/Service';
import { User } from '@entities/User';

import type { Request, Response } from '@types';

type QueryParams = {
  citySlug?: string;
  countrySlug?: string;
};

type Filter = {
  city?: { slug: string };
  country?: { slug: string };
  moderated: boolean;
  user?: User;
};

export const getServices = async (req: Request, res: Response) => {
  const { citySlug, countrySlug } = req.query as QueryParams;
  const { authUser: user } = req;

  try {
    const filters: Filter[] = [
      {
        ...(citySlug && { city: { slug: citySlug } }),
        ...(countrySlug && { country: { slug: countrySlug } }),
        moderated: true,
      },
    ];

    if (user) {
      filters.push({
        ...(citySlug && { city: { slug: citySlug } }),
        ...(countrySlug && { country: { slug: countrySlug } }),
        moderated: false,
        user,
      });
    }

    const services = await Service.createQueryBuilder('service')
      .leftJoinAndSelect('service.city', 'city')
      .leftJoinAndSelect('service.country', 'country')
      .leftJoinAndSelect('service.tags', 'tag')
      .leftJoinAndSelect('service.user', 'user')
      .leftJoinAndSelect('service.logo', 'logo')
      .loadRelationCountAndMap('service.comments', 'service.comments')
      .select([
        'service.id',
        'service.name',
        'service.description',
        'service.date',
        'city',
        'country',
        'tag',
        'logo',
        'user.id',
        'user.firstName',
        'user.lastName',
        'user.photo',
        'user.photo200',
      ])
      .orderBy('service.date', 'DESC')
      .where(filters)
      .getMany();

    res.json({
      services,
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
