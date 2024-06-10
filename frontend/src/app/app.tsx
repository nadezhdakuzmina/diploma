import * as VKID from '@vkid/sdk';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as React from 'react';

import Routing from '@routing';

import { selectVkOauthData } from '@data/selectors/appData';

import '@assets/styles/common.scss';
import '@assets/styles/variables.scss';

const App: React.FC = () => {
  const { appId, redirectUri } = useSelector(selectVkOauthData);

  React.useEffect(() => {
    VKID.Config.set({
      app: appId,
      redirectUrl: `http://localhost:9090${redirectUri}`,
    });
  }, [appId, redirectUri]);

  return (
    <>
      <Helmet>
        <title>Твой путеводитель - опыт тысячи туристов в одном месте</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Helmet>
      <Routing />
    </>
  );
};

export default App;
