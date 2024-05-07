import * as React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';
import ContentWrapper from '../ContentWrapper';
import PostCard from '../../PostCard';
import TextArea from '../TextArea';

import S from './styles.module.css';

const Treads: React.FC = () => {
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
          link: '/country/turkey/city/instanbul#threads',
          text: 'Треды',
        },
      ]} />
      <TextArea className={S.textArea} />
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </ContentWrapper>
  );
};

export default Treads;
