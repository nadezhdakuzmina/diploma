import * as React from 'react';

import { Context } from './Tabs.context';

type TabsItemProps = {
  id: string;
  children?: React.ReactNode;
}

const TabsItem: React.FC<TabsItemProps> = (props) => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('Tabs.Item should must be used inside Tabs.Privider');
  }

  if (props.id !== context.activeTabId) {
    return null;
  }

  return <>{props.children}</>;
};

export default TabsItem;
