import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import Routing from '@routing';

import type { FC } from 'react';
import type { AppProps } from './types';

import '@assets/styles/common.scss';
import '@assets/styles/variables.scss';

const App: FC<AppProps> = ({
  store,
}) => (
  <>
    <Helmet>
      <title>Твой путеводитель - опыт тысячи туристов в одном месте</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
    <Provider store={store}>
      <Routing />
    </Provider>
  </>
);

export default App;
