import { defaultState } from './defaultState';

import type { AppDataState } from './types';

export const reducer = (state = defaultState, action: any): AppDataState => state;
