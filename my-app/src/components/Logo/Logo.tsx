import * as React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import logo from './logo_white.svg';

import S from './styles.module.css';

type LogoProps = {
  className?: string;
  minimal?: boolean;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link to="/" className={cn(S.root, props.className, { [S.minimalRoot]: props.minimal })}>
      <img className={S.logo} src={logo} />
      <span className={S.slogan}>
        <span className={S.title}>Твой путеводитель</span>
        <span className={S.description} >Опыт тысячи туристов в одном месте</span>
      </span>
    </Link>
  );
};

export default Logo;
