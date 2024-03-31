export type Tab = {
  id: string;
  value: string;
};


export type TabsContext = {
  tabs: Tab[];
  activeTabId: string;
  setActiveTabId: (tabId: string) => void;
};
