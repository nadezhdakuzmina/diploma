import md5 from 'md5';

import User, { Role } from './User';

import { ADMINJS_SECRET, SECRET } from '@constants';

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

  const userByUsername = User.findOneBy({
    username: usernameOrEmail,
    password: hashedPassword,
  });

  return userByUsername.then((user) => {
    if (user?.role !== Role.Admin) {
      return null;
    }

    return user;
  });
};

export const createUserAccessTokenByVkAccessToken = (vkAccessToken: string) => {
  return md5(`${SECRET}:${vkAccessToken}`);
};
