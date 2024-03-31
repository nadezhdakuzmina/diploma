import type { Tab } from './types';

export const getDefaultTabId = (tabs: Tab[], path?: string) => {
  const hash = path
    ? path.match(/#(.+)/)?.[1]
    : window.location.hash.slice(1);

  const tabWithId = tabs.find(({ id }) => id === hash);

  return tabWithId?.id || tabs[0]?.id;
};
