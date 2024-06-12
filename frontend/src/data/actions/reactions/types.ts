import {
  SET_REACTIONS
} from './actions';

import type { ReactionRecord } from '@types';
import type { BaseAction } from '@data/types/actions';

export type SetReactionsAction = BaseAction<typeof SET_REACTIONS> & {
  reactions: ReactionRecord;
};

export type ActionTypes =
  | SetReactionsAction;

