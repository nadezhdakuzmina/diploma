import {
  SET_REACTIONS,
} from './actions';

import type { ReactionRecord } from '@types';
import type { SetReactionsAction } from './types';

export const setReactionsAction = (reactions: ReactionRecord): SetReactionsAction => ({
  type: SET_REACTIONS,
  reactions,
});
