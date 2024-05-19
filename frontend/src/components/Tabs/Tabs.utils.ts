import type { Tab } from './types';

export const getDefaultTabId = (tabs: Tab[], search: string): string => {
  const searchParams = new URLSearchParams(search);
  const tabId = searchParams.get('tab');

  const tabWithId = tabs.find(({ id }) => id === tabId);

  return tabWithId?.id || tabs[0]?.id;
};
