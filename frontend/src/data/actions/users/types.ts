import type { BaseAction } from '@data/types/actions';
import type { User } from '@data/types/entities/user';

export interface SetTokenAction extends BaseAction<'SET_USERS'> {
  users: User[];
}

export type ActionTypes =
  | SetTokenAction;
