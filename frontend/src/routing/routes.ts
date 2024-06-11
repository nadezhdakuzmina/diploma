import Main from '@pages/Main';
import Country from '@pages/Country';
import City from '@pages/City';

import {
  countriesMiddleware,
  citiesMiddleware,
  currentCountryMiddleware,
  currentCityMiddleware,
} from '@root/middlewares';

import { ExtendedRouteObject } from './types';

export const routes: ExtendedRouteObject[] = [
  {
    path: '/',
    Component: Main,
    middlewares: [
      countriesMiddleware,
    ],
  },
  {
    path: '/country/:country',
    Component: Country,
    middlewares: [
      currentCountryMiddleware,
      citiesMiddleware,
    ],
  },
  {
    path: '/country/:country/city/:city',
    Component: City,
    middlewares: [
      currentCountryMiddleware,
      currentCityMiddleware,
    ]
  },
];
