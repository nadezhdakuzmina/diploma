import * as React from 'react';

import Header from '../../components/Header';
import { TabsItem, TabsProvider } from '../../components/Tabs';
import Cities from '../../components/Cities';
import PageWrapper from '../../components/PageWrapper';
import Services from '../../components/Services';
import ContentWrapper from '../../components/ContentWrapper';
import PostCard from '../../PostCard';
import Treads from '../../components/Treads';

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

const Country: React.FC = () => {
  return (
    <PageWrapper>
      <TabsProvider tabs={PAGE_TABS}>
        <Header minimal />
        <TabsItem id={CITIES_TAB_ID}>
          <Cities />
        </TabsItem>
        <TabsItem id={THREADS_TAB_ID}>
            <Treads />
        </TabsItem>
        <TabsItem id={SERVICES_TAB_ID}>
          <Services />
        </TabsItem>
      </TabsProvider>
    </PageWrapper>
  );
};

export default Country;
