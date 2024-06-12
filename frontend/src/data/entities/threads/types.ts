import type { Thread, FullThread } from '@types';

export type ThreadsState = {
  threads: (FullThread | Thread)[] | null;
  currentThread: FullThread | null;
};
