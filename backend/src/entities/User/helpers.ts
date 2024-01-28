import md5 from 'md5';

import User from './User';

import { ADMINJS_SECRET } from '@constants';

export const hashPassword = async (password: string) =>
  md5(`${ADMINJS_SECRET}:${password}`);

export const authenticate = async (
  usernameOrEmail: string,
  password: string
) => {
  const hashedPassword = await hashPassword(password);

  const usersCount = await User.count();

  // Если нет пользователей, то пускаем первого
  if (!usersCount) {
    return {
      email: '@TEST_USER@',
    };
  }

  const userByEmail = User.findOneBy({
    email: usernameOrEmail,
    password: hashedPassword,
  });
  const userByUsername = User.findOneBy({
    username: usernameOrEmail,
    password: hashedPassword,
  });

  return Promise.all([userByEmail, userByUsername]).then(
    ([foundUserByEmail, foundUserByUsername]) => {
      return foundUserByEmail || foundUserByUsername;
    }
  );
};
