import * as React from 'react';
import { useDispatch } from 'react-redux';

import Header from '@components/Header';
import { TabsItem, TabsProvider } from '@components/Tabs';

import PageWrapper from '@components/PageWrapper';
import Countries from '@components/Countries';
import Services from '@components/Services';
import Threads from '@components/Threads';

import { loadCountriesThunk } from '@data/thunk/countries';
import { flushCountriesAction } from '@data/actions/countries';

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
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCountriesThunk());

    return () => {
      console.log('FLUSH countries');
      dispatch(flushCountriesAction());
    };
  }, [dispatch]);

  return (
    <PageWrapper>
      <TabsProvider tabs={PAGE_TABS}>
        <Header />
        <TabsItem id={COUNTRIES_TAB_ID}>
          <Countries />
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

export default Main;
