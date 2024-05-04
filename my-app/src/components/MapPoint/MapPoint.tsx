import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

export type MapPointProps = {
  selected: boolean;
  image: string;
  name: string;
  onClick: () => void;
};

const MapPoint: React.FC<MapPointProps> = (props) => {
  const backgroundImage = `url(${props.image})`;

  return (
    <div
      onClick={props.onClick}
      className={cn(S.root, { [S.selected]: props.selected })}
    >
      <div className={S.imageWrapper}>
        <div className={S.image} style={{ backgroundImage }} />
        <svg className={S.pointer} width="12" height="5" viewBox="0 0 12 5">
          <path d="M8.40416 3.74566L12 0H0.48L4.07584 3.74566C5.25652 4.97554 7.22348 4.97554 8.40416 3.74566Z" fill="white"/>
        </svg>
      </div>
      <span className={S.name}>{props.name}</span>
    </div>
  );
};

export default MapPoint;
