import * as React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import LogoIcon from './logo_white.svg';

import S from './styles.scss';

type LogoProps = {
  className?: string;
  minimal?: boolean;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link to="/" className={cn(S.root, props.className, { [S.minimalRoot]: props.minimal })}>
      <LogoIcon className={S.logo} />
      <span className={S.slogan}>
        <span className={S.title}>Твой путеводитель</span>
        <span className={S.description} >Опыт тысячи туристов в одном месте</span>
      </span>
    </Link>
  );
};

export default Logo;
