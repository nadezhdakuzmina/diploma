import * as React from 'react';

import ContentWrapper from '../ContentWrapper';
import ServiceCard from '../ServiceCard';

import S from './styles.module.css';
import Breadcrumbs from '../Breadcrumbs';

const CARDS = [
  {
    id: 1,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Uber',
    description: 'Сервис такси',
    tags: ['транспорт', 'такси']
  },
  {
    id: 2,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Uber',
    description: 'Сервис такси',
    tags: ['транспорт', 'такси']
  },
  {
    id: 3,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Uber',
    description: 'Сервис такси',
    tags: ['транспорт', 'такси']
  },
  {
    id: 4,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Uber',
    description: 'Сервис такси',
    tags: ['транспорт', 'такси']
  },
  {
    id: 5,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Yandex GO',
    description: 'Сервис такси',
    tags: ['транспорт']
  },
  {
    id: 6,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Uber',
    description: 'Сервис такси',
    tags: ['транспорт', 'такси']
  },
  {
    id: 7,
    src: 'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200',
    name: 'Uber',
    description: 'Сервис такси',
    tags: ['транспорт', 'такси']
  }
]

const Services: React.FC = () => {
  return (
    <ContentWrapper className={S.root}>
      <Breadcrumbs className={S.breadcrumbs} crumbs={[
        {
          link: '/',
          text: 'Главная',
        },
        {
          link: '/country/turkey',
          text: 'Турция',
        },
        {
          link: '/country/turkey/city/instanbul',
          text: 'Стамбул',
        },
        {
          link: '/country/turkey/city/instanbul#services',
          text: 'Сервисы',
        },
      ]} />
      <div className={S.content}>
        {CARDS.map((item) => (
          <ServiceCard
            key={item.id}
            {...item}
            className={S.card}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Services;
