import * as React from 'react';
import cn from 'classnames';

import S from './styles.scss';

type TextAreaProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  label?: string;
  disabled?: boolean;
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
};

const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  disabled,
  textAreaRef,
  ...otherProps
}) => {
  const inputRef = textAreaRef || React.useRef<HTMLTextAreaElement>(null);
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
      <div onClick={clickHandler} className={cn(S.wrapper, {
        [S.disabled]: disabled,
        [S.active]: isActive,
      })}>
        <textarea
          placeholder="Давным давно в далекой галактике..."
          className={S.textArea}
          {...otherProps}
          disabled={disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default TextArea;
