import * as React from 'react';
import cn from 'classnames';

import Tags from '@components/Tags';

import S from './styles.scss';

type TagInputProps = {
  className?: string;
  label?: string;
  tags: string[];
  onTagsChange?: (tags: string[]) => void;
};

const TagInput: React.FC<TagInputProps> = (props) => {
  const [value, setValue] = React.useState('');

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

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback((event) => {
    let newValue = event.target.value;

    if (newValue === '#') {
      newValue = '';
    } else if (newValue.length > 0 && !newValue.match(/^#/)) {
      newValue = `#${newValue}`;
    }

    setValue(newValue);
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback((event) => {
    if (event.keyCode === 13) {
      props.onTagsChange?.([...props.tags, value.replace(/#+/, '')]);
      setValue('');
    }

    if (event.keyCode === 8 && value.length === 0) {
      props.onTagsChange?.([...props.tags.slice(0, -1)]);
    }
  }, [value, props.tags, props.onTagsChange]);

  return (
    <div className={cn(S.root, props.className)}>
      {props.label && <label className={S.label}>{props.label}</label>}
      <div onClick={clickHandler} className={cn(S.wrapper, { [S.active]: isActive })}>
        <Tags className={S.tags} tags={props.tags} />
        <input
          ref={inputRef}
          className={S.input}
          placeholder="#пушка..."
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default TagInput;
