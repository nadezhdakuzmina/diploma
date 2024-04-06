import * as React from 'react';
import cn from 'classnames';

import { Context } from './Tabs.context';

import S from './styles.module.css';

type TabsProps = {
  className?: string;
};

const Tabs: React.FC<TabsProps> = (props) => {
  const context = React.useContext(Context);

  if (!context) {
    return null;
  }

  const onChangeTab = (tab: string) => {
    context.setActiveTabId(tab);
  };

  return (
    <div className={cn(S.root, props.className)}>
      {context.tabs.map((tab) => {
        const onClick = () => onChangeTab(tab.id);
        const isActive = context.activeTabId === tab.id;

        return (
          <div
            key={tab.id}
            className={cn(S.tab, { [S.activeTab]: isActive })}
            onClick={onClick}
          >
            {tab.value}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
