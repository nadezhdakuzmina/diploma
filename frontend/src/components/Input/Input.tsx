import * as React from 'react';
import cn from 'classnames';

import S from './styles.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  label?: string;
  className?: string;
  inputClassName?: string;
};

const Input: React.FC<InputProps> = ({
  icon,
  className,
  inputClassName,
  label,
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
    <div className={cn(S.root, className)}>
      {label && <label className={S.label}>{label}</label>}
      <div
        onClick={clickHandler}
        className={cn(S.inputWrapper, { [S.active]: isActive }, inputClassName)}
      >
        {icon && <div className={S.icon}>{icon}</div>}
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          className={S.input}
          {...otherProps}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
