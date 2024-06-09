import type { BaseAction } from '@data/types/actions';
import type { UserData } from '@types';
import { SET_USER } from './actions';

export interface SetUserAction extends BaseAction<typeof SET_USER> {
  user: UserData;
}

export type ActionTypes =
  | SetUserAction;
