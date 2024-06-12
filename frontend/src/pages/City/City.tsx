import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Header from '@components/Header';
import { TabsItem, TabsProvider } from '@components/Tabs';

import CategoricalMap from '@components/CategoricalMap';
import PageWrapper from '@components/PageWrapper';
import Services from '@components/Services';
import Threads from '@components/Threads';

import { loadCurrentCityThunk } from '@data/thunk/cities';
import { unsetCurrentCityAction } from '@data/actions/cities';
import { loadCurrentCountryThunk } from '@data/thunk/countries';
import { unsetCurrentCountryAction } from '@data/actions/countries';
import { loadThreadsThunk } from '@data/thunk/threads';
import { flushThreadsAction } from '@data/actions/threads';
import { loadPointsThunk } from '@data/thunk/points';
import { flushPointsAction } from '@data/actions/points';
import { selectCurrentCity } from '@data/selectors/cities';

import { PointCategory } from '@types';

const MAP_TAB_ID = 'map';
const THREADS_TAB_ID = 'threads';
const SERVICES_TAB_ID = 'services';

const PAGE_TABS = [
  {
    id: MAP_TAB_ID,
    value: 'Места'
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

type CityPageParams = {
  country: string;
  city: string;
};

const City: React.FC = () => {
  const dispatch = useDispatch();
  const { city, country } = useParams() as CityPageParams;
  
  const currentCity = useSelector(selectCurrentCity);

  React.useEffect(() => {
    dispatch(loadCurrentCityThunk(city));
    dispatch(loadCurrentCountryThunk(country));
    dispatch(loadThreadsThunk(country, city));

    return () => {
      dispatch(unsetCurrentCityAction());
      dispatch(unsetCurrentCountryAction());
      dispatch(flushThreadsAction());
    };
  }, [city, dispatch]);

  React.useEffect(() => {
    if (!currentCity) {
      return;
    }

    dispatch(loadPointsThunk(PointCategory.Popular));

    return () => {
      dispatch(flushPointsAction());
    };
  }, [currentCity]);

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
