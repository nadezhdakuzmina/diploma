import { Thread } from '@entities/Thread';

import type { Request, Response } from '@types';

type QueryParams = {
  id: string;
};

export const getThread = async (req: Request, res: Response) => {
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
    const thread = await Thread.createQueryBuilder('thread')
      .leftJoinAndSelect('thread.city', 'city')
      .leftJoinAndSelect('thread.country', 'country')
      .leftJoinAndSelect('thread.tags', 'tag')
      .leftJoinAndSelect('thread.user', 'user')
      .leftJoinAndSelect('thread.comments', 'comment')
      .leftJoinAndSelect('comment.user', 'commentUser')
      .loadRelationCountAndMap('thread.reactions', 'thread.reactions')
      .select([
        'thread.id',
        'thread.date',
        'thread.text',
        'city',
        'country',
        'tag',
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
      thread,
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
