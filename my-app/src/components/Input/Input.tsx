import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  className,
  ...otherProps
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isActive, setActive] = React.useState(false);

  const handleFocus = React.useCallback(() => {
    setActive(true);
  }, []);

  const handleBlur = React.useCallback(() => {
    setActive(false);
  }, []);

  const clickHandler = React.useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      onClick={clickHandler}
      className={cn(S.root, { [S.active]: isActive }, className)}
    >
      {icon && <div className={S.icon}>{icon}</div>}
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        placeholder={placeholder}
        className={S.input}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
