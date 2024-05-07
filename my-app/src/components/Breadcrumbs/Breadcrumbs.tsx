import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';
import { Link } from 'react-router-dom';

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
              className={S.spacer}
            >
              {'/'}
            </span>
          ) : null}
          <Link
            to={crumb.link}
            key={crumb.text}
            className={S.crumb}
          >
            {crumb.text}
          </Link>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
