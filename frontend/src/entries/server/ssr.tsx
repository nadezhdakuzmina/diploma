import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { discoverProjectStyles, getCriticalStyles } from 'used-styles';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import App from '@app';

import { templator } from './html';
import { createStore } from '@data/store';
import { initServerState } from '@data/store/initServerState';

import { STATIC_PATH } from '@constants';

import type { Request, Response } from '@types';

const stylesLookup = discoverProjectStyles(STATIC_PATH);

export const ssr = async (req: Request, res: Response) => {
  await stylesLookup;

  const state = initServerState(req);
  const store = createStore(state);

  const helmet = Helmet.renderStatic();
  const appHTML = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const preloadedState = store.getState();
  const criticalStyles = getCriticalStyles(appHTML, stylesLookup)
    .replace('data-used-styles="index.css"', '');

  const indexHTML = await templator(appHTML, preloadedState, [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
    criticalStyles,
  ]);

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
};
