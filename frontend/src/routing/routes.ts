import Main from '@pages/Main';
import Country from '@pages/Country';
import City from '@pages/City';

import {
  countriesMiddleware,
  citiesMiddleware,
  currentCountryMiddleware,
  currentCityMiddleware,
  threadsMiddleware,
  pointsMiddleware,
} from '@root/middlewares';

import type { ExtendedRouteObject } from './types';

export const routes: ExtendedRouteObject[] = [
  {
    path: '/',
    Component: Main,
    middlewares: [
      countriesMiddleware,
      threadsMiddleware,
    ],
  },
  {
    path: '/country/:country',
    Component: Country,
    middlewares: [
      currentCountryMiddleware,
      citiesMiddleware,
      threadsMiddleware,
    ],
  },
  {
    path: '/country/:country/city/:city',
    Component: City,
    middlewares: [
      currentCountryMiddleware,
      currentCityMiddleware,
      threadsMiddleware,
      pointsMiddleware,
    ]
  },
];
