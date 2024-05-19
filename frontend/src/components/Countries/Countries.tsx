import * as React from 'react';

import ContentWrapper from '@components/ContentWrapper';
import PlaceCard from '@components/PlaceCard';
import Breadcrumbs from '@components/Breadcrumbs';

import S from './styles.scss';

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
      <Breadcrumbs className={S.breadcrumbs} crumbs={[
        {
          link: '/',
          text: 'Главная',
        },
        {
          link: '/#countries',
          text: 'Страны',
        },
      ]} />
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
