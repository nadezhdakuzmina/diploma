import { Reaction, ReactionType } from '@entities/Reaction';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';

type BodyParams = {
  threadId: number;
  type: ReactionType;
};

export const postRection = requireAuth(async (req: Request, res: Response) => {
  const { threadId, type } = req.body as BodyParams;
  const { authUser: user } = req;

  if (!threadId || !type) {
    return res.status(400).json({
      error: 'threadId and type are required',
    });
  }

  if (!Object.values(ReactionType).includes(type)) {
    return res.status(400).json({
      error: 'invalid type',
    });
  }

  try {
    const reactions = await Reaction.findBy({
      threadId,
      user,
    });

    const hasSameReaction = reactions.some(
      ({ type: reactionType }) => reactionType === type
    );

    if (hasSameReaction) {
      return res.status(400).json({
        error: 'reaction already been setted',
      });
    }

    const reaction = Reaction.create({
      user,
      threadId,
      type: ReactionType.Like,
    });

    await reaction.save();

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
});
