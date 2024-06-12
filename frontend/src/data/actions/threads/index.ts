import {
  FLUSH_THREADS,
  SET_CURRENT_THREAD,
  SET_THREADS,
  UNSET_CURRENT_THREAD,
  UPDATE_THREAD,
} from './actions';

import type { Thread, FullThread } from '@types';
import type {
  SetThreadsAction,
  FlushThreadsAction,
  SetCurrentThreadAction,
  UnsetCurrentThreadAction,
  UpdateThreadAction,
} from './types';

export const setThreadsAction = (threads: (FullThread | Thread)[]): SetThreadsAction => ({
  type: SET_THREADS,
  threads,
});

export const updateThreadAction = (thread: FullThread | Thread): UpdateThreadAction => ({
  type: UPDATE_THREAD,
  thread,
});

export const flushThreadsAction = (): FlushThreadsAction => ({
  type: FLUSH_THREADS,
});

export const setCurrentThreadAction = (thread: FullThread): SetCurrentThreadAction => ({
  type: SET_CURRENT_THREAD,
  thread,
});

export const unsetCurrentThreadAction = (): UnsetCurrentThreadAction => ({
  type: UNSET_CURRENT_THREAD,
});
