import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type TagsProps = {
  tags: string[];
  className?: string;
};

const Tags: React.FC<TagsProps> = (props) => {
  return (
    <div className={cn(S.tags, props.className)}>
      {props.tags.map((tag, index) => (
        <div key={`${tag}_${index}`} className={S.tag}>#{tag}</div>
      ))}
    </div>
  );
};

export default Tags;
