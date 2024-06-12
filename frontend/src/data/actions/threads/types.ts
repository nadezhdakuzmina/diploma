import {
  SET_THREADS,
  FLUSH_THREADS,
  SET_CURRENT_THREAD,
  UNSET_CURRENT_THREAD,
} from './actions';

import type { Thread, FullThread } from '@types';
import type { BaseAction } from '@data/types/actions';

export type FlushThreadsAction = BaseAction<typeof FLUSH_THREADS>;

export type SetThreadsAction = BaseAction<typeof SET_THREADS> & {
  threads: (FullThread | Thread)[];
};

export type SetCurrentThreadAction = BaseAction<typeof SET_CURRENT_THREAD> & {
  thread: FullThread;
};

export type UnsetCurrentThreadAction = BaseAction<typeof UNSET_CURRENT_THREAD>;

export type ActionTypes =
  | FlushThreadsAction
  | SetThreadsAction
  | SetCurrentThreadAction
  | UnsetCurrentThreadAction;
