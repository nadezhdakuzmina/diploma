import * as React from 'react';
import cn from 'classnames';

import type { UserData } from '@types';

import S from './styles.scss';

type AvatarProps = {
  className?: string;
  user:
    Pick<UserData, 'firstName' | 'photo'> &
    Partial<Pick<UserData, 'photo200'>>;
};

const Avatar: React.FC<AvatarProps> = (props) => {
  const { user } = props;

  const firstLetter = user.firstName[0].toUpperCase();

  const photo = user.photo200 || user.photo;

  const style = photo ? {
    backgroundImage: `url(${photo})`,
  } : null;

  return (
    <div className={cn(S.root, props.className)} style={style}>
      {photo ? null : firstLetter}
    </div>
  );
};

export default Avatar;
