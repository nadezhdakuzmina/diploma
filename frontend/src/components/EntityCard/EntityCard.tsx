import * as React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import S from './styles.scss';

type EntityCardProps = {
  src: string;
  className?: string;
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void;
};

const EntityCard: React.FC<EntityCardProps> = (props) => {
  return (
    <div className={cn(S.root, props.className)} onClick={props.onClick}>
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
