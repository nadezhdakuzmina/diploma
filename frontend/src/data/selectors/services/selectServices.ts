import type { State } from '@data/types';
import type { Service } from '@types';

export const selectServices = (state: State): Service[] => state.services.services;
