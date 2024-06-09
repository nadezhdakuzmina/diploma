import type { State } from '@data/types';
import type { UserData } from '@types';

export const selectUserData = (state: State): UserData => state.user;
