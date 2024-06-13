import * as React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Search } from '@api';

import Tabs from '@components/Tabs';
import SearchBar from '@components/SearchBar';
import ContentWrapper from '@components/ContentWrapper';
import LoginButton from '@components/LoginButton';
import Logo from '@components/Logo';
import { User } from '@components/User';

import { selectUserData } from '@data/selectors/user';
import { getCountryUrl } from '@utils/getCountryUrl';
import { getCityUrl } from '@utils/getCityUrl';

import S from './styles.scss';

type HeaderProps = {
  minimal?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigator = useNavigate();

  const userData = useSelector(selectUserData);

  const searchIdMapRef = React.useRef(new Map<string, string>());

  const searchEngine = React.useCallback(async (query: string) => {
    searchIdMapRef.current = new Map();

    return Search
      .search(query)
      .then((countries) => {
        return countries.map((country) => {
          const { id, name, cities } = country;

          const searchId = `country(${id})`;
          searchIdMapRef.current.set(searchId, getCountryUrl(country));

          const subSuggests = cities.map((city) => {
            const { id, name } = city;

            const subSearchId = `${searchId}:city(${id})`;
            searchIdMapRef.current.set(subSearchId, getCityUrl(country, city));

            return {
              value: name,
              searchId: subSearchId
            };
          });

          return {
            value: name,
            searchId,
            subSuggests,
          };
        });
      });
  }, []);

  return (
    <div className={cn(S.root, { [S.minimalRoot]: props.minimal })}>
      <ContentWrapper className={S.topLine}>
        {userData ? (
          <User userData={userData} />
        ) : (
          <LoginButton />
        )}
      </ContentWrapper>
      <ContentWrapper className={S.content}>
        <Logo className={S.logo} minimal={props.minimal} />
        <SearchBar
          className={S.searchBar}
          onEnter={(_, searchId) => {
            const url = searchIdMapRef.current.get(searchId);
            navigator(url);
          }}
          searchEngine={searchEngine}
          placeholder="Куда отправимся?..."
        />
      </ContentWrapper>
      <Tabs className={S.tabs} />
    </div>
  )
};

export default Header;
