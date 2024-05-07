import * as React from 'react';

import Header from '../Header';
import { TabsItem, TabsProvider } from '../Tabs';
import Cities from '../Cities';
import PageWrapper from '../PageWrapper';
import Services from '../Services';
import ContentWrapper from '../ContentWrapper';
import PostCard from '../../PostCard';

const CITIES_TAB_ID = 'cities';
const THREADS_TAB_ID = 'threads';
const SERVICES_TAB_ID = 'services';

const PAGE_TABS = [
  {
    id: CITIES_TAB_ID,
    value: 'Города'
  },
  {
    id: THREADS_TAB_ID,
    value: 'Треды',
  },
  {
    id: SERVICES_TAB_ID,
    value: 'Сервисы',
  }
];

const Treads: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: '.height100 { height: 100%; padding-top: 24px; padding-bottom: 24px }' }} />
      <ContentWrapper className="height100">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ContentWrapper>
    </>
  );
};

export default Treads;
