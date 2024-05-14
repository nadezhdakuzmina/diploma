import * as React from 'react';

import PlacesMap from '../PlacesMap';
import CategoryCard from '../CategoryCard';
import PointModal from '../PointModal';

import { type PointData } from '../MapPoints';

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
];

const CATEGORIES_POINTS: Record<string, PointData[]> = {
  'famous': [
    {
      id: '1',
      point: [-70.9, 42.35] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Чисто хуйня'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Хасан роуд',
      point: [-70.89, 42.45] as [number, number]
    }
  ],
  'natural': [
    {
      id: '1',
      point: [-70.94, 42.25] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Заповедник'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Знаменитый парк',
      point: [-70.85, 42.40] as [number, number]
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Бла бла бла',
      point: [-70.4, 42.20] as [number, number]
    }
  ],
  'Пляжи': [
    {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Знаменитый парк',
      point: [-70.85, 42.40] as [number, number]
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Бла бла бла',
      point: [-70.4, 42.20] as [number, number]
    }
  ],
  'Инстместа': [
    {
      id: '1',
      point: [-70.9, 42.35] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Чисто хуйня'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Хасан роуд',
      point: [-70.89, 42.45] as [number, number]
    }
  ],
  'Отели': [
    {
      id: '1',
      point: [-70.9, 42.35] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Чисто хуйня'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Хасан роуд',
      point: [-70.89, 42.45] as [number, number]
    }
  ],
  'Рестораны и бары': [
    {
      id: '1',
      point: [-70.9, 42.35] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Чисто хуйня'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Хасан роуд',
      point: [-70.89, 42.45] as [number, number]
    }
  ],
  'Местные блюда': [
    {
      id: '1',
      point: [-70.9, 42.35] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Чисто хуйня'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Хасан роуд',
      point: [-70.89, 42.45] as [number, number]
    }
  ],
  'Не попсовое': [
    {
      id: '1',
      point: [-70.9, 42.35] as [number, number],
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Чисто хуйня'
    }, {
      id: 'qf  qwf',
      image: 'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:480:480:0&g=ce',
      name: 'Хасан роуд',
      point: [-70.89, 42.45] as [number, number]
    }
  ],
};

const CategoricalMap: React.FC = () => {
  const [activeCategory, setCategory] = React.useState(CATEGORIES[0].id);
  const [activePoint, setActivePoint] = React.useState<string>('');

  const handleOnSelect = React.useCallback((id: string) => {
    setActivePoint(id);
  }, []);

  const handleChangeCategory = React.useCallback((id: string) => {
    setCategory(id);
    setActivePoint('');
  }, []);

  const handleModalClose = React.useCallback(() => {
    setActivePoint('');
  }, []);

  return (
    <div className={S.root}>
      <div className={S.categories}>
        {CATEGORIES.map((item) => (
          <CategoryCard
            key={item.id}
            active={activeCategory === item.id}
            className={S.categoriesItem}
            onClick={() => handleChangeCategory(item.id)}
            {...item}
          />
        ))}
      </div>
      <PlacesMap
        className={S.map}
        zoom={9}
        centerPoint={[-70.9, 42.35]}
        points={CATEGORIES_POINTS[activeCategory]}
        onSelect={handleOnSelect}
        selectedPoint={activePoint}
      />
      {activePoint && (
        <PointModal
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default CategoricalMap;
