import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type CategoryCardProps = {
  src: string;
  title: string;
  subtitle: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  const rootCn = cn(S.root, {
    [S.activeRoot]: props.active,
  }, props.className);

  return (
    <div onClick={props.onClick} className={rootCn}>
      <div className={S.imgWrap}>
        <img src={props.src} />
      </div>
      <div className={S.content}>
        <h4 className={S.title}>{props.title}</h4>
        <span className={S.subtitle}>{props.subtitle}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
