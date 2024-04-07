import * as React from 'react';

import ContentWrapper from '../ContentWrapper';
import PlaceCard from '../PlaceCard';

import S from './styles.module.css';

const COUNTRIES = [
  {
    id: 1,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Турция',
    tags: ['историческия', 'вкусная еда'],
    references: 2921,
    link: '/country/turkey',
  },
  {
    id: 2,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Турция',
    tags: ['историческия', 'вкусная еда'],
    references: 2921,
    link: '/country/turkey',
  },
  {
    id: 3,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Турция',
    tags: ['историческия', 'вкусная еда'],
    references: 2921,
    link: '/country/turkey',
  },
  {
    id: 4,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Турция',
    tags: ['историческия', 'вкусная еда'],
    references: 2921,
    link: '/country/turkey',
  },
  {
    id: 5,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Турция',
    tags: ['историческия', 'вкусная еда'],
    references: 2921,
    link: '/country/turkey',
  },
  {
    id: 6,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Турция',
    tags: ['историческия', 'вкусная еда'],
    references: 2921,
    link: '/country/turkey',
  },
];

const Cities: React.FC = () => {
  return (
    <ContentWrapper className={S.root}>
      <div className={S.content}>
        {COUNTRIES.map((item) => (
          <PlaceCard
            key={item.id}
            {...item}
            className={S.card}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Cities;
