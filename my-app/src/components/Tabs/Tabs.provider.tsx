import * as React from 'react';

import { Context } from './Tabs.context';

import type { Tab } from './types';
import { getDefaultTabId } from './Tabs.utils';

type TabsProviderProps = {
  children?: React.ReactNode;
  tabs: Tab[];
  path?: string;
};

const TabsProvider: React.FC<TabsProviderProps> = (props) => {
  const [activeTabId, setActiveTabId] = React.useState(getDefaultTabId(props.tabs, props.path));

  const handleSetActiveTabId = (tabId: string) => {
    setActiveTabId(tabId);
    window.location.hash = tabId;
  };

  React.useEffect(() => {
    const popStateHandler = () => {
      const tabId = window.location.hash.slice(1);
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
