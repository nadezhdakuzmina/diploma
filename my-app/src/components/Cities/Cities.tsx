import * as React from 'react';

import ContentWrapper from '../ContentWrapper';
import CityCard from '../CityCard';

import S from './styles.module.css';

const CITIES = [
  {
    id: 1,
    src: 'https://lisa.ru/wp-content/uploads/2018/01/HiRes_ShutterStock_Fotodom.ru_shutterstock_525106075.jpg',
    name: 'Стамбул',
    tags: ['исторический центр', 'вкусная еда', 'на***вают'],
    references: 1504,
    link: '/country/turkey/city/instanbul',
  },
  {
    id: 2,
    src: 'https://sportishka.com/uploads/posts/2022-03/1647863636_15-sportishka-com-p-antaliya-port-kaleichi-turizm-krasivo-foto-19.jpg',
    name: 'Анталья',
    tags: ['курорт', 'кайфануть'],
    references: 1240,
    link: '/country/turkey/city/instanbul',
  },
  {
    id: 3,
    src: 'https://sportishka.com/uploads/posts/2022-03/1646306090_59-sportishka-com-p-shari-v-kappadokii-turizm-krasivo-foto-74.jpg',
    name: 'Кападокия',
    tags: ['красиво', 'инстаместо', 'полетать'],
    references: 1942,
    link: '/country/turkey/city/instanbul',
  },
  {
    id: 4,
    src: 'https://www.thesun.co.uk/wp-content/uploads/2022/07/NINTCHDBPICT000444079338.jpg',
    name: 'Бодрум',
    tags: ['курорт', 'лакшери'],
    references: 1192,
    link: '/country/turkey/city/instanbul',
  },
  {
    id: 5,
    src: 'https://kartinki.pics/uploads/posts/2021-03/1616075515_44-p-ankara-krasivie-foto-48.jpg',
    name: 'Анкара',
    tags: ['столица', 'суета'],
    references: 304,
    link: '/country/turkey/city/instanbul',
  },
]

const Cities: React.FC = () => {
  return (
    <ContentWrapper className={S.root}>
      <div className={S.content}>
        {CITIES.map((item) => (
          <CityCard
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
