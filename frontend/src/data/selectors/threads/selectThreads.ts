import type { State } from '@data/types';
import type { Thread } from '@types';

export const selectThreads = (state: State): Thread[] => state.threads.threads;
