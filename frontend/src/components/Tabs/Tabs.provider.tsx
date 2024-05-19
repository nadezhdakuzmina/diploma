import * as React from 'react';

import { Context } from './Tabs.context';

import { getDefaultTabId } from './Tabs.utils';

import type { Tab } from './types';
import { useLocation, useNavigate } from 'react-router';

type TabsProviderProps = {
  children?: React.ReactNode;
  tabs: Tab[];
};

const TabsProvider: React.FC<TabsProviderProps> = (props) => {
  const navigateTo = useNavigate();
  const { pathname, search } = useLocation();

  const [activeTabId, setActiveTabId] = React.useState(getDefaultTabId(props.tabs, search));

  const handleSetActiveTabId = (tabId: string) => {
    setActiveTabId(tabId);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('tab', tabId);

    navigateTo(`${pathname}?${searchParams.toString()}`);
  };

  React.useEffect(() => {
    const popStateHandler = () => {
      const tabId = getDefaultTabId(props.tabs, window.location.hash);
      setActiveTabId(tabId);
    };

    window.addEventListener('popstate', popStateHandler);

    return () => {
      window.removeEventListener('popstate', popStateHandler)
    };
  }, []);

  const context = React.useMemo(() => ({
    tabs: props.tabs,
    activeTabId,
    setActiveTabId: handleSetActiveTabId,
  }), [props.tabs, activeTabId, handleSetActiveTabId]);

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  );
};

export default TabsProvider;
