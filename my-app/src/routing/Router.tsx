import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { routes } from './routes';

const reactRouter = createBrowserRouter(routes);

const Router: React.FC = () => {
  return <RouterProvider router={reactRouter} />;
};

export default Router;
