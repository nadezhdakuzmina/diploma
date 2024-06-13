import * as React from 'react';
import cn from 'classnames';

import S from './styles.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
  inputClassName?: string;
  onFileSelect?: (file: File) => void;
  filename?: string;
  multiple?: boolean;
};

const FileInput: React.FC<InputProps> = ({
  className,
  inputClassName,
  onFileSelect,
  filename,
  label,
  multiple,
  ...otherProps
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const clickHandler = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    const file = event.target.files[0];
    event.target.value = '';
    onFileSelect?.(file);
  }, [onFileSelect]);

  return (
    <div className={cn(S.root, className)}>
      {label && <label className={S.label}>{label}</label>}
      <div
        onClick={clickHandler}
        className={cn(S.inputWrapper, inputClassName)}
      >
        <svg className={S.icon} viewBox="0 -32 576 576">
          <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"/>
        </svg>
        <span className={S.text}>
          {filename ? (
            <>
              Файл: {filename}
            </>
          ) : (
            <>
              Выберите файл
              {multiple && 'ы (Можно несколько)'}
            </>
          )}
        </span>
        <input
          ref={inputRef}
          className={S.input}
          multiple={multiple}
          onChange={handleChange}
          {...otherProps}
          type="file"
        />
      </div>
    </div>
  );
};

export default FileInput;
