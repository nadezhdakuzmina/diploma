import * as React from 'react';
import cn from 'classnames';

import Avatar from '@components/Avatar';

import { getUserName } from '@utils/getUserName';
import { formatDate } from '@utils/formatDate';

import S from './styles.scss';

import type { UserData } from '@types';

type CommentProps = {
  className?: string;
  user: UserData;
  text: string;
  date: string;
};

const Comment: React.FC<CommentProps> = (props) => {
  const userName = getUserName(props.user);

  return (
    <div className={cn(S.root, props.className)}>
      <Avatar className={S.avatar} user={props.user} />
      <div className={S.content}>
        <span className={S.title}>
          {userName}
        </span>
        <span className={S.text}>
          {props.text}
        </span>
        <span className={S.date}>
          {formatDate(props.date)}
        </span>
      </div>
    </div>
)};

export default Comment;
