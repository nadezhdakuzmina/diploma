import * as React from 'react';
import cn from 'classnames';

import { useOutsideClick } from '@hooks/useOutsideClick';

import S from './styles.scss';

type OptionId = string | number;

type Option = {
  id: OptionId;
  name: string;
}

type SelectProps = {
  label?: string;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  options: Option[];
  selectedOption?: OptionId;
  onOptionSelect?: (optionId: OptionId) => void;
};

const Select: React.FC<SelectProps> = ({
  className,
  inputClassName,
  label,
  placeholder,
  options,
  selectedOption,
  onOptionSelect
}) => {
  const [isActive, setActive] = React.useState(false);
  const ref = useOutsideClick(() => setActive(false));

  const clickHandler = React.useCallback(() => {
    setActive(true);
  }, []);

  const createOptionSelectHandler = React.useCallback((optionId: OptionId) => {
    return () => {
      onOptionSelect?.(optionId)
    };
  }, [onOptionSelect]);

  const selectedOptionName = React.useMemo(() => {
    return options
      .find(({ id }) => id === selectedOption)
      ?.name;
  }, [selectedOption]);

  return (
    <div className={cn(S.root, className)}>
      {label && <label className={S.label}>{label}</label>}
      <div className={S.inputWrapper}>
        <div
          ref={ref}
          onClick={clickHandler}
          className={cn(S.input, { [S.active]: isActive }, inputClassName)}
        >
          {selectedOptionName || placeholder}
        </div>
        {isActive ? (
          <div className={S.options}>
            {options.map(({ id, name }) => (
              <div
                key={id}
                className={S.option}
                onClick={createOptionSelectHandler(id)}
              >
                {name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Select;
