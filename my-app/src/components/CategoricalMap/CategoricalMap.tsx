import * as React from 'react';

import Map from '../Map';
import CategoryCard from '../CategoryCard';

import S from './styles.module.css';

const CATEGORIES = [
  {
    id: 'famous',
    title: 'Известное',
    subtitle: 'Места с открыток',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tabs/famous@svg',
  },
  {
    id: 'natural',
    title: 'Природа',
    subtitle: 'Отдохнуть от города',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tab/mountain_snow_1645699918@svg',
  },
  {
    id: 'Пляжи',
    title: 'Пляжи',
    subtitle: 'Покупаться и позагорать',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tab/beach_with_umbrella_1655298711@svg',
  },
  {
    id: 'Инстместа',
    title: 'Инстместа',
    subtitle: 'Красивые фоточки',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/camera-with-flash',
  },
  {
    id: 'Отели',
    title: 'Отели с картинки',
    subtitle: 'Пожить красиво',
    src: 'https://hermitage.aviasales.com/img/plain/locals_trap/tab/bed_1644915283@svg',
  },
  {
    id: 'Рестораны и бары',
    title: 'Рестораны и бары',
    subtitle: 'Вкусно отдохуть',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/bellhop-bell',
  },
  {
    id: 'Местные блюда',
    title: 'Местные блюда',
    subtitle: 'Что попробовать',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/drooling-face',
  },
  {
    id: 'Не попсовое',
    title: 'Не попсовое',
    subtitle: 'Отдохнуть без толп',
    src: 'https://hermitage.aviasales.ru/img/rs:fill:48:48/plain/joypixels/magnifying-glass-tilted-right',
  },
]

const CategoricalMap: React.FC = () => {
  const [activeCategory, setCategory] = React.useState(CATEGORIES[0].id);

  return (
    <div className={S.root}>
      <div className={S.categories}>
        {CATEGORIES.map((item) => (
          <CategoryCard
            key={item.id}
            active={activeCategory === item.id}
            className={S.categoriesItem}
            onClick={() => setCategory(item.id)}
            {...item}
          />
        ))}
      </div>
      <Map className={S.map} />
    </div>
  );
};

export default CategoricalMap;
