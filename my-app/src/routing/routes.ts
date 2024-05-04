import Main from '../pages/Main';
import Country from '../pages/Country';
import City from '../pages/City';
import Registration from '../pages/Registration';

import type { RouteObject } from 'react-router-dom';
import Auth from '../pages/Auth';

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
    path: '/registration',
    Component: Registration,
  },
  {
    path: '/auth',
    Component: Auth,
  },
  {
    path: '/country/:country/city/:city',
    Component: City,
  }
];
