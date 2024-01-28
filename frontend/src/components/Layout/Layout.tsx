import S from './Layout.scss';

import type { FC } from 'react';
import type { State } from '@data/types';

const Layout: FC = ({
  children,
}) => {
  return (
    <div className={S.root}>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
