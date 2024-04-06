import * as React from 'react';

import S from './styles.module.css';

type PageWrapperProps = {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  return (
    <div className={S.root}>
      {props.children}
    </div>
  );
};

export default PageWrapper;
