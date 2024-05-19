import Main from '@pages/Main';
import Country from '@pages/Country';
import City from '@pages/City';

import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/country/:country',
    Component: Country,
  },
  {
    path: '/country/:country/city/:city',
    Component: City,
  },
];
