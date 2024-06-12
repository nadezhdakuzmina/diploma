import type { City } from './cities';
import type { Comment } from './comments';
import type { Image } from './image';
import type { Tag } from './tags';
import type { UserData } from './user';

export enum PointCategory {
  Popular = 'Popular',
  Nature = 'Nature',
  Beaches = 'Beaches',
  Insta = 'Insta',
  Hotels = 'Hotels',
  Restorans = 'Restorans',
  Locals = 'Locals',
  NotPopular = 'NotPopular',
}

export type Point = {
  id: number;
  name: string;
  description: string;
  type: PointCategory;
  lng: number;
  lat: number;
  moderated: boolean;
  images: Image[]
};

export type FullPoint = Point & {
  user: UserData;
  city: City;
  comments: Comment[];
  tags: Tag[];
};
