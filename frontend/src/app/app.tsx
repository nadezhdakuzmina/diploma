import * as VKID from '@vkid/sdk';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as React from 'react';

import Routing from '@routing';

import type { AppProps } from './types';

import '@assets/styles/common.scss';
import '@assets/styles/variables.scss';

const App: React.FC<AppProps> = ({
  store,
}) => {
  React.useEffect(() => {
    VKID.Config.set({
      app: 51942760,
      redirectUrl: 'http://localhost:9090/api/users/oauth',
    });
  }, []);

  return (
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
};

export default App;
