import * as React from 'react';

import Header from '../../components/Header';
import ContentWrapper from '../../components/ContentWrapper';
import { TabsItem, TabsProvider } from '../../components/Tabs';

import CategoricalMap from '../../components/CategoricalMap';
import PageWrapper from '../../components/PageWrapper';

const MAP_TAB_ID = 'map';
const FEED_TAB_ID = 'feed';
const SERVICES_TAB_ID = 'services';

const PAGE_TABS = [
  {
    id: MAP_TAB_ID,
    value: 'Карта'
  },
  {
    id: FEED_TAB_ID,
    value: 'Лента',
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
        <TabsItem id={FEED_TAB_ID}>
          <ContentWrapper heightFit>
            Feed
          </ContentWrapper>
        </TabsItem>
        <TabsItem id={SERVICES_TAB_ID}>
          <ContentWrapper heightFit>
            Services
          </ContentWrapper>
        </TabsItem>
      </TabsProvider>
    </PageWrapper>
  );
};

export default City;
