import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';
import { Link } from 'react-router-dom';

type EntityCardProps = {
  src: string;
  className?: string;
  children?: React.ReactNode;
  link?: string;
};

const EntityCard: React.FC<EntityCardProps> = (props) => {
  return (
    <div className={cn(S.root, props.className)}>
      <div className={S.image} style={{ backgroundImage: `url(${props.src})` }} />
      <div className={S.content}>
        {props.children}
      </div>
      {props.link ? (
        <Link className={S.link} to={props.link} />
      ) : null}
    </div>
  );
};

export default EntityCard;
