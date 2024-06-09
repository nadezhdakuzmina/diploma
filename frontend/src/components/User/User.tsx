import * as React from 'react';

import Button from '@components/Button';

import S from './styles.scss';

import type { UserData } from '@types';

type UserProps = {
  className?: string;
  userData: UserData;
};

const User: React.FC<UserProps> = (props) => {
  const { firstName, lastName, photo } = props.userData;

  const shortName = React.useMemo(() => {
    return `${firstName} ${lastName[0]}.`;
  }, [firstName, lastName]);

  return (
    <div className={props.className}>
      <Button className={S.root}>
        {shortName}
        <img className={S.logo} src={photo} />
      </Button>
    </div>
  );
};

export default User;
