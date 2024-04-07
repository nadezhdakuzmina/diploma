import * as React from 'react';

import Header from '../../components/Header';
import ContentWrapper from '../../components/ContentWrapper';
import { TabsItem, TabsProvider } from '../../components/Tabs';

import CategoricalMap from '../../components/CategoricalMap';
import PageWrapper from '../../components/PageWrapper';
import Services from '../../components/Services';
import PostCard from '../../PostCard';

const MAP_TAB_ID = 'map';
const THREADS_TAB_ID = 'threads';
const SERVICES_TAB_ID = 'services';

const PAGE_TABS = [
  {
    id: MAP_TAB_ID,
    value: 'Карта'
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

const City: React.FC = () => {
  return (
    <PageWrapper>
      <TabsProvider tabs={PAGE_TABS}>
        <Header minimal />
        <TabsItem id={MAP_TAB_ID}>
          <CategoricalMap />
        </TabsItem>
        <TabsItem id={THREADS_TAB_ID}>
          <style dangerouslySetInnerHTML={{ __html: '.height100 { height: 100%; padding-top: 24px; padding-bottom: 24px }' }} />
          <ContentWrapper className="height100">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </ContentWrapper>
        </TabsItem>
        <TabsItem id={SERVICES_TAB_ID}>
          <Services />
        </TabsItem>
      </TabsProvider>
    </PageWrapper>
  );
};

export default City;
