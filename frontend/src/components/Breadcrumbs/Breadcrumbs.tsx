import * as React from 'react';
import cn from 'classnames';

import S from './styles.scss';
import { Link } from 'react-router-dom';

export type Crumb = {
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
        <React.Fragment key={crumb.link}>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
