import * as React from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import Tabs from '@components/Tabs';
import SearchBar from '@components/SearchBar';
import ContentWrapper from '@components/ContentWrapper';
import LoginButton from '@components/LoginButton';
import Logo from '@components/Logo';

import S from './styles.scss';

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
        <Logo className={S.logo} minimal={props.minimal} />
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
