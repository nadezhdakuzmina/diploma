import * as React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import S from './styles.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  link?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const ElemTag = props.link ? Link : 'span';

  return (
    <ElemTag
      to={props.link || ''}
      className={cn(S.root, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </ElemTag>
  );
};

export default Button;
