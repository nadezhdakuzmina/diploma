import type { Image } from './image';

export type Country = {
  id: number;
  name: string;
  description: string;
  logo: Image;
  slug: string;
};
  