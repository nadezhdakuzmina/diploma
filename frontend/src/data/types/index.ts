import type { AppDataState } from '@data/entities/appData/types';
import type { UserState } from '@data/entities/user/types';

export interface State {
  appData: AppDataState;
  user: UserState;
}
