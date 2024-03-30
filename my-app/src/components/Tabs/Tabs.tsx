import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type TabsProps = {
  className?: string;
  tabs: string[];
  defaultActiveTab?: string;
  onChange?: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState(
    props.defaultActiveTab || props.tabs[0]
  );

  const onChangeTab = (tab: string) => {
    setActiveTab(tab);
    props.onChange?.(tab);
  };

  return (
    <div className={cn(S.root, props.className)}>
      {props.tabs.map((tab) => {
        const onClick = () => onChangeTab(tab);
        const isActive = activeTab === tab;

        return (
          <div
            key={tab}
            className={cn(S.tab, { [S.activeTab]: isActive })}
            onClick={onClick}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
