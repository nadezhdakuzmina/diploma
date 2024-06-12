import type { UserData } from './user';

export type Comment = {
  id: number;
  date: string;
  text: string;
  user: UserData;
};
