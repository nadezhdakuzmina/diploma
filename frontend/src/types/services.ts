import type { City } from './cities';
import type { Country } from './countries';
import type { Tag } from './tags';
import type { UserData } from './user';
import type { Comment } from './comments';
import type { Image } from './image';

export type Service = {
  id: number;
  name: string;
  description: string;
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
  logo: Image;
  tags: Tag[];
};

export type FullService = Service & {
  comments: Comment[];
}
