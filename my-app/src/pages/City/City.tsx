import * as React from 'react';

import Header from '../../components/Header';
import { TabsItem, TabsProvider } from '../../components/Tabs';

import CategoricalMap from '../../components/CategoricalMap';
import PageWrapper from '../../components/PageWrapper';
import Services from '../../components/Services';
import Threads from '../../components/Threads';

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
          <Threads />
        </TabsItem>
        <TabsItem id={SERVICES_TAB_ID}>
          <Services />
        </TabsItem>
      </TabsProvider>
    </PageWrapper>
  );
};

export default City;
