import * as React from 'react';
import cn from 'classnames';

import { useColorMode, Switch } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';

import S from './styles.module.css';

type ThemeSwitcherProps = {
  className?: string;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className={cn(S.root, props.className)}>
      <Switch
        isChecked={colorMode == 'dark'}
        onChange={toggleColorMode}
        className={S.switch}
      />
      <FaMoon />
    </div>
  );
};

export default ThemeSwitcher;
