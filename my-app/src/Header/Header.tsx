import type { FC } from 'react';
import {
  Avatar, Box, Select,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import S from './styles.module.css';

const Header: FC = () => (
  <Box className={S.root} bg="twitter.500">
    <Box className={S.select}>
      <Box color='white' className={S.text}>
        <span className={S.title} >Твой путеводитель</span>
        <span className={S.description} >Опыт тысячи туристов в одном месте</span>
      </Box>
    </Box>
    <Box className={S.menu}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Avatar bg='teal.111' size='md' justifySelf="flex-end" />
    </Box>
  </Box>
);

export default Header;