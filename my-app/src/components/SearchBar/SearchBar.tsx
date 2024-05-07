import * as React from 'react';
import cn from 'classnames';

import Input from '../Input';

import S from './styles.module.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';

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
      <Input
        className={S.searchBar}
        placeholder={props.placeholder}
        onChange={handleInput}
        value={inputValue}
        icon={
          <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            <path d="M22 22L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        }
      />
      {suggests ? suggests.map((suggest) => (
        <React.Fragment key={suggest.searchId}>
          {renderSuggest(suggest)}
        </React.Fragment>
      )) : null}
    </div>
  );
};

export default SearchBar;
