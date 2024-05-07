import * as React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';
import ContentWrapper from '../ContentWrapper';
import PostCard from '../../PostCard';

const Treads: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: '.breadcrumbs { margin-bottom: 20px; } .height100 { height: 100%; padding-top: 24px; padding-bottom: 24px }' }} />
      <ContentWrapper className="height100">
        <Breadcrumbs className={'breadcrumbs'} crumbs={[
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
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </ContentWrapper>
    </>
  );
};

export default Treads;
