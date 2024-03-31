import * as React from 'react';

import Header from '../../components/Header';
import ContentWrapper from '../../components/ContentWrapper';
import { TabsItem, TabsProvider } from '../../components/Tabs';

const City: React.FC = () => {
  return (
    <TabsProvider tabs={[
      {
        id: 'map',
        value: 'Карта'
      },
      {
        id: 'feed',
        value: 'Лента',
      },
      {
        id: 'services',
        value: 'Сервисы',
      }
    ]}>
      <Header minimal />
      <ContentWrapper>
        <TabsItem id="map">1</TabsItem>
      </ContentWrapper>
    </TabsProvider>
  );
};

export default City;
