import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '@app';

import { createStore } from '@data/store';
import { initClientState } from '@data/store/initClientState';

import DOMReady from '@utils/DOMReady';
import { IS_PRODUCTION, PRELOADED_STATE_KEY } from '@constants';

DOMReady.then(async () => {
  const preloadedState = window[PRELOADED_STATE_KEY] || initClientState();
  delete window[PRELOADED_STATE_KEY];

  const store = createStore(preloadedState);
  const rootElement = document.getElementById('root');

  // @ts-expect-error
  window.store = store;

  const app = (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  if (!IS_PRODUCTION) {
    render(app, rootElement);
  } else {
    hydrate(app, rootElement);
  }
});
