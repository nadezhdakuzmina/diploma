import * as React from 'react';
import cn from 'classnames';

import {
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

import S from './styles.module.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Link } from 'react-router-dom';

type Suggest = {
  value: string;
  searchId: string;
  subSuggests?: Omit<Suggest, 'subSuggests'>[];
};

type SearchBarProps = {
  className?: string;
  placeholder?: string;
  onEnter?: (value: string, searchId?: string) => void;
  searchEngine: (query: string) => Promise<null | Suggest[]>;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [suggests, setSuggests] = React.useState<Suggest[] | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  const rootRef = useOutsideClick<HTMLDivElement>(() => {
    setSuggests(null);
  });

  const handleInput = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    const { value } = event.target;

    setInputValue(value);

    if (value.length < 3) {
      setSuggests(null);
      return;
    }

    props.searchEngine(value)
      .then((result) => {
        setSuggests(result);
      })
      .catch((error) => {
        console.error('Getting suggest error:', error);
      });
  }, []);

  const createSelectHandler = React.useCallback((searchId: string, value: string) => {
    return () => {
      setSuggests(null);
      setInputValue(value);
      props.onEnter?.(value, searchId);
    };
  }, []);

  const handleKeyPress: React.KeyboardEventHandler = (event) => {
    if (event.keyCode === 13) {
      setSuggests(null);
      props.onEnter?.(inputValue);
    }
  };

  const renderSuggest = (suggest: Suggest) => (
    <div className={S.suggest}>
      <div
        key={suggest.searchId}
        className={S.suggestItem}
        onClick={createSelectHandler(suggest.searchId, suggest.value)}
      >
        {suggest.value}
      </div>
      {suggest.subSuggests?.map((subSuggest) => (
        <div
          key={subSuggest.searchId}
          className={cn(S.suggestItem, S.suggestSubItem)}
          onClick={createSelectHandler(subSuggest.searchId, subSuggest.value)}
        >
          {subSuggest.value}
          <span>{`, ${suggest.value}`}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div ref={rootRef} className={cn(S.root, props.className)}>
      <InputGroup className={S.searchBar}>
        <InputLeftElement className={S.inputLeft}>
          <FaSearch className={S.icon} />
        </InputLeftElement>
        <Input
          value={inputValue}
          onChange={handleInput}
          className={S.input}
          placeholder={props.placeholder}
          onKeyDownCapture={handleKeyPress}
        />
      </InputGroup>
      {suggests ? suggests.map((suggest) => (
        <React.Fragment key={suggest.searchId}>
          {renderSuggest(suggest)}
        </React.Fragment>
      )) : null}
    </div>
  );
};

export default SearchBar;