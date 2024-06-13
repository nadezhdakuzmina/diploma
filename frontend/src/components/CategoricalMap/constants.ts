import { PointCategory } from '@types';

import type { Category } from './types';

export const DEFAULT_ZOOM = 12;

export const CATEGORIES: Category[] = [
  {
    id: PointCategory.Popular,
    title: 'Известное',
    subtitle: 'Места с открыток',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tabs/famous@svg',
  },
  {
    id: PointCategory.Nature,
    title: 'Природа',
    subtitle: 'Отдохнуть от города',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tab/mountain_snow_1645699918@svg',
  },
  {
    id: PointCategory.Beaches,
    title: 'Пляжи',
    subtitle: 'Покупаться и позагорать',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tab/beach_with_umbrella_1655298711@svg',
  },
  {
    id: PointCategory.Insta,
    title: 'Инстместа',
    subtitle: 'Красивые фоточки',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/camera-with-flash',
  },
  {
    id: PointCategory.Hotels,
    title: 'Отели с картинки',
    subtitle: 'Пожить красиво',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tab/bed_1644915283@svg',
  },
  {
    id: PointCategory.Restorans,
    title: 'Рестораны и бары',
    subtitle: 'Вкусно отдохуть',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/bellhop-bell',
  },
  {
    id: PointCategory.Locals,
    title: 'Местные блюда',
    subtitle: 'Что попробовать',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/drooling-face',
  },
  {
    id: PointCategory.NotPopular,
    title: 'Не попсовое',
    subtitle: 'Отдохнуть без толп',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/magnifying-glass-tilted-right',
  },
];
