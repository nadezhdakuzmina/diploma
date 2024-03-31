import * as React from 'react';

import Header from '../../components/Header';
import ContentWrapper from '../../components/ContentWrapper';
import { TabsItem, TabsProvider } from '../../components/Tabs';

import City from '../../City';
import { Routes, Route, RouterProvider, createHashRouter } from 'react-router-dom';

/* const router = createHashRouter([
  {
    path: '#country',
    element: <h1>Country</h1>
  },
  {
    path: '#lifehacks',
    element: <h1>Lifehacks</h1>
  },
]); */

const Main: React.FC = () => {
  return (
    <TabsProvider tabs={[
      {
        id: 'cities',
        value: 'Города'
      },
      {
        id: 'lifehacks',
        value: 'Лайфхаки',
      },
      {
        id: 'services',
        value: 'Сервисы',
      }
    ]}>
      <Header />
      <ContentWrapper>
        <TabsItem id="cities"><City /></TabsItem>
      </ContentWrapper>
    </TabsProvider>
  );
};

export default Main;
