import { Reactions } from '@api';

import type { ReactionRecord, Request, Response } from '@types';
import type { NextFunction } from 'express';

export const reactionsMiddleware = async (req: Request, _: Response, next: NextFunction) => {
  try{
    const reactions = await Reactions.getReactions({
      headers: req.headers,
    });
  
    const reactionsRecord = reactions.reduce<ReactionRecord>((acc, reaction) => {
      return {
        ...acc,
        [reaction.threadId]: reaction,
      };
    }, {});
  
  
    req.reactions = reactionsRecord;
  } catch(error) {
    console.error(error);
  }

  next();
};
