import * as React from 'react';

import Header from '../../components/Header';
import ContentWrapper from '../../components/ContentWrapper';
import { TabsItem, TabsProvider } from '../../components/Tabs';

import City from '../../City';

const Country: React.FC = () => {
  return (
    <TabsProvider tabs={[
      {
        id: 'cities',
        value: 'Города'
      },
      {
        id: 'lifehaks',
        value: 'Лайфхаки',
      },
      {
        id: 'services',
        value: 'Сервисы',
      }
    ]}>
      <Header minimal />
      <ContentWrapper>
        <TabsItem id="cities"><City /></TabsItem>
      </ContentWrapper>
    </TabsProvider>
  );
};

export default Country;
