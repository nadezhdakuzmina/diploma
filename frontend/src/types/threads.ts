import type { City } from './cities';
import type { Country } from './countries';
import type { Tag } from './tags';
import type { UserData } from './user';
import type { Comment } from './comments';

export type Thread = {
  id: number;
  date: string;
  text: string;
  user: Pick<UserData,
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'photo'
    | 'photo200'
  >;
  country: Country;
  city: City;
  comments: number;
  reactions: number;
  tags: Tag[];
};

export type FullThread = Thread & {
  comments: Comment[];
}
