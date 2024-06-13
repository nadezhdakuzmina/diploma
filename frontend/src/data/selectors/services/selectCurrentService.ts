import type { State } from '@data/types';
import type { FullService } from '@types';

export const selectCurrentService = (state: State): FullService => state.services.currentService;
