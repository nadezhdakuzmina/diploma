import { Comment } from '@entities/Comment';

import { requireAuth } from '@utils/requireAuth';

import type { Request, Response } from '@types';

type BodyParams = {
  threadId: number;
  text: string;
};

export const postComment = requireAuth(async (req: Request, res: Response) => {
  const { threadId, text } = req.body as BodyParams;
  const { authUser: user } = req;

  if (!threadId || !text) {
    return res.status(400).json({
      error: 'text and threadId are required',
    });
  }

  const comment = Comment.create({
    threadId,
    text,
    user,
  });

  try {
    await comment.save();

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
