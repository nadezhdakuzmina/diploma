import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type ContentWrapperProps = {
  children?: React.ReactNode;
  className?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
  return (
    <div className={cn(S.root, props.className)}>
      {props.children}
    </div>
  );
};

export default ContentWrapper;
