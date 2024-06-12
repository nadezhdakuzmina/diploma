import { Thread } from '@entities/Thread';

import type { Request, Response } from '@types';

type QueryParams = {
  citySlug?: string;
  countrySlug?: string;
};

export const getThreads = async (req: Request, res: Response) => {
  const { citySlug, countrySlug } = req.query as QueryParams;

  try {
    const threads = await Thread.createQueryBuilder('thread')
      .leftJoinAndSelect('thread.city', 'city')
      .leftJoinAndSelect('thread.country', 'country')
      .leftJoinAndSelect('thread.tags', 'tag')
      .leftJoinAndSelect('thread.user', 'user')
      .loadRelationCountAndMap('thread.reactions', 'thread.reactions')
      .loadRelationCountAndMap('thread.comments', 'thread.comments')
      .select([
        'thread.id',
        'thread.date',
        'thread.text',
        'city',
        'country',
        'tag',
        'user.id',
        'user.firstName',
        'user.lastName',
        'user.photo',
        'user.photo200',
      ])
      .orderBy('thread.date', 'DESC')
      .where({
        ...(citySlug && { city: { slug: citySlug } }),
        ...(countrySlug && { country: { slug: countrySlug } }),
      })
      .getMany();

    res.json({
      threads,
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
