import * as React from 'react';
import cn from 'classnames';

import ThemeSwitcher from '../ThemeSwitcher';

import S from './styles.module.css';
import Tabs from '../Tabs';
import SearchBar from '../SearchBar';

type HeaderProps = {
  minimal?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={cn(S.root, { [S.minimalRoot]: props.minimal })}>
      <div className={S.top}>
        <ThemeSwitcher />
        {/* <Avatar bg='teal.111' size='md' justifySelf="flex-end" /> */}
      </div>
      <div className={S.content}>
        <div className={S.slogan}>
          <span className={S.title} >Твой путеводитель</span>
          <span className={S.description} >Опыт тысячи туристов в одном месте</span>
        </div>
        <SearchBar
          className={S.searchBar}
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
          placeholder="Куда отправимся?"
        />
      </div>
      <Tabs
        className={S.tabs}
        tabs={['Города', 'Лайфхаки', 'Сервисы']}
      />
    </div>
  )
};

export default Header;
