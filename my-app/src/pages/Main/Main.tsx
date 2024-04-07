import * as React from 'react';

import Header from '../../components/Header';
import { TabsItem, TabsProvider } from '../../components/Tabs';

import PageWrapper from '../../components/PageWrapper';
import Countries from '../../components/Countries';
import Services from '../../components/Services';
import ContentWrapper from '../../components/ContentWrapper';
import PostCard from '../../PostCard';

const COUNTRIES_TAB_ID = 'countries';
const THREADS_TAB_ID = 'threads';
const SERVICES_TAB_ID = 'services';

const PAGE_TABS = [
  {
    id: COUNTRIES_TAB_ID,
    value: 'Страны'
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

const Main: React.FC = () => {
  return (
    <PageWrapper>
      <TabsProvider tabs={PAGE_TABS}>
        <Header />
        <TabsItem id={COUNTRIES_TAB_ID}>
          <Countries />
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

export default Main;
