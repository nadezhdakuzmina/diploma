import { Router } from 'express';

import { Reactions } from '@views';

export const ReactionsPath = '/reactions';
export const ReactionsRouter = Router();

ReactionsRouter.post('/revoke', Reactions.revokeReaction);
ReactionsRouter.get('/', Reactions.getReactions);
