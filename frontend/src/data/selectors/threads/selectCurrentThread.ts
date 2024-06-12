import type { State } from '@data/types';
import type { FullThread } from '@types';

export const selectCurrentThread = (state: State): FullThread => state.threads.currentThread;
