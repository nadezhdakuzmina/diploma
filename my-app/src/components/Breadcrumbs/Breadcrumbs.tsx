import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type Crumb = {
  text: string;
  link: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
  className?: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <div className={cn(S.root, props.className)}>
      {props.crumbs.map((crumb, index) => (
        <>
          {index > 0 ? (
            <span
              key={crumb.text + 'before'}
              className={S.crumb}
            >
              {'>'}
            </span>
          ) : null}
          <span
            key={crumb.text}
            className={S.crumb}
          >
            {crumb.text}
          </span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
