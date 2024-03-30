import * as React from 'react';
import cn from 'classnames';

import {
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

import ThemeSwitcher from '../ThemeSwitcher';

import S from './styles.module.css';
import Tabs from '../Tabs';

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
        <InputGroup className={S.searchBar}>
          <InputLeftElement className={S.inputLeft}>
            <FaSearch className={S.icon} />
          </InputLeftElement>
          <Input colorScheme="twitter" className={S.input} placeholder="Куда отправимся?" />
        </InputGroup>
      </div>
      <Tabs
        className={S.tabs}
        tabs={['Города', 'Лайфхаки', 'Сервисы']}
      />
    </div>
  )
};

export default Header;
