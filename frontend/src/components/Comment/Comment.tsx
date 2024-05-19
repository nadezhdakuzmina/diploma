import * as React from 'react';
import cn from 'classnames';

import S from './styles.scss';

type CommentProps = {
  className?: string;
  name: string;
  text: string;
  date: string;
};

const Comment: React.FC<CommentProps> = (props) => {
  const firstLetter = props.name[0];

  return (
    <div className={cn(S.root, props.className)}>
      <div className={S.avatar}>{firstLetter}</div>
      <div className={S.content}>
        <span className={S.title}>
          {props.name}
        </span>
        <span className={S.text}>
          {props.text}
        </span>
        <span className={S.date}>
          {props.date}
        </span>
      </div>
    </div>
)};

export default Comment;
