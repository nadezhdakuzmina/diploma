import type { City } from './cities';
import type { Image } from './image';

export type Country = {
  id: number;
  name: string;
  description: string;
  logo: Image;
  slug: string;
};

export type FullCountry = Country & {
  cities: City[];
};
  