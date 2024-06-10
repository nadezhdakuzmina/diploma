import * as React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import Button from '@components/Button';

import { logoutThunk } from '@data/thunk/user';

import S from './styles.scss';

import type { UserData } from '@types';

type UserProps = {
  className?: string;
  userData: UserData;
};

const User: React.FC<UserProps> = (props) => {
  const { firstName, lastName, photo } = props.userData;

  const dispatch = useDispatch();

  const logoutHandler = React.useCallback(() => {
    dispatch(logoutThunk());
  }, [dispatch]);

  const shortName = React.useMemo(() => {
    return `${firstName} ${lastName[0]}.`;
  }, [firstName, lastName]);

  return (
    <div className={cn(S.root, props.className)}>
      <Button className={cn(S.button, props.className)}>
        {shortName}
        <img className={S.logo} src={photo} />
      </Button>
      <div onClick={logoutHandler} className={S.logoutButton}>
        <span className={S.logoutButtonText}>
          Выйти
        </span>
      </div>
    </div>
  );
};

export default User;
