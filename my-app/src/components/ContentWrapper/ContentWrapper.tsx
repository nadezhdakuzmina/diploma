import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type ContentWrapperProps = {
  children?: React.ReactNode;
  className?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
  const rootCn = cn(S.root, props.className);

  return (
    <div className={rootCn}>
      {props.children}
    </div>
  );
};

export default ContentWrapper;
