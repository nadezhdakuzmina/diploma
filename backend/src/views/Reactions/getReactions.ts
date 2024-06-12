import { Reaction } from '@entities/Reaction';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';

export const getReactions = requireAuth(async (req: Request, res: Response) => {
  const { authUser: user } = req;

  try {
    const reactions = await Reaction.findBy({
      user,
    });

    res.json({
      reactions,
    });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error
          ? `${error.message} ${error.stack}`
          : JSON.stringify(error),
    });
  }
});
