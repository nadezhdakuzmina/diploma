import { Reaction } from '@entities/Reaction';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';

type BodyParams = {
  id: number;
};

export const revokeReaction = requireAuth(
  async (req: Request, res: Response) => {
    const { id } = req.body as BodyParams;
    const { authUser: user } = req;

    try {
      const reaction = await Reaction.findOneBy({
        id,
        user,
      });

      if (!reaction) {
        return res.status(400).json({
          error: 'reaction not found',
        });
      }

      await Reaction.remove(reaction);

      res.json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error
            ? `${error.message} ${error.stack}`
            : JSON.stringify(error),
      });
    }
  }
);
