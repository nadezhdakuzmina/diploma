import * as React from 'react';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

import Tabs from '../Tabs';
import SearchBar from '../SearchBar';
import ContentWrapper from '../ContentWrapper';
import LoginButton from '../LoginButton';

import S from './styles.module.css';

type HeaderProps = {
  minimal?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigator = useNavigate();

  return (
    <div className={cn(S.root, { [S.minimalRoot]: props.minimal })}>
      <ContentWrapper className={S.topLine}>
        <LoginButton />
      </ContentWrapper>
      <ContentWrapper className={S.content}>
        <Link to="/" className={S.slogan}>
          <span className={S.title}>Твой путеводитель</span>
          <span className={S.description} >Опыт тысячи туристов в одном месте</span>
        </Link>
        <SearchBar
          className={S.searchBar}
          onEnter={(_, searchId) => {
            navigator(searchId === '1' ? '/country/turkey' : '/country/turkey/city/instanbul')
          }}
          searchEngine={() => Promise.resolve([
            {
              value: 'Турция',
              searchId: '1',
              subSuggests: [
                {
                  value: 'Бодрум',
                  searchId: '12',
                },
                {
                  value: 'Помукале',
                  searchId: '13',
                },
                {
                  value: 'Стамбул',
                  searchId: '14',
                },
                {
                  value: 'Анталия',
                  searchId: '15',
                },
                {
                  value: 'Алания',
                  searchId: '16',
                },
              ],
            }
          ])}
          placeholder="Куда отправимся?..."
        />
      </ContentWrapper>
      <Tabs className={S.tabs} />
    </div>
  )
};

export default Header;
