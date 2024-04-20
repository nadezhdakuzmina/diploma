import * as React from 'react';

import PageWrapper from '../../components/PageWrapper';

import S from './styles.module.css';
import { Button, Heading, Input, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Registration: React.FC = () => {
  return (
    <PageWrapper>
      <div className={S.root}>
        <div className={S.card} >
          <div className={S.text} >
            <Heading >
              Войдите или зарегистрируйтесь
            </Heading>
            <Text>
              Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира
            </Text>
          </div>
          <div className={S.inputGroup}>
            <input
              placeholder='логин'
            />
            <input
              placeholder='пароль'
            />
            <Button>
              Зарегистрироваться
            </Button>
            <Link to="/" >
              Уже есть аккаунт
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Registration;
