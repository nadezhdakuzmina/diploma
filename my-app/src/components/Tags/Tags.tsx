import * as React from 'react';

import S from './styles.module.css';

type TagsProps = {
  tags: string[];
  className?: string;
};

const Tags: React.FC<TagsProps> = (props) => {
  return (
    <div className={props.className}>
      {props.tags.map((tag) => (
        <div key={tag} className={S.tag}>#{tag}</div>
      ))}
    </div>
  );
};

export default Tags;
