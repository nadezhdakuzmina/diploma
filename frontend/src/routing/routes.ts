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
  servicesMiddleware,
} from '@root/middlewares';

import type { ExtendedRouteObject } from './types';

export const routes: ExtendedRouteObject[] = [
  {
    path: '/',
    Component: Main,
    middlewares: [
      countriesMiddleware,
      threadsMiddleware,
      servicesMiddleware,
    ],
  },
  {
    path: '/country/:country',
    Component: Country,
    middlewares: [
      currentCountryMiddleware,
      citiesMiddleware,
      threadsMiddleware,
      servicesMiddleware,
    ],
  },
  {
    path: '/country/:country/city/:city',
    Component: City,
    middlewares: [
      currentCountryMiddleware,
      currentCityMiddleware,
      pointsMiddleware,
      threadsMiddleware,
      servicesMiddleware,
    ]
  },
];
