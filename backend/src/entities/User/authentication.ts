import User, { Role } from './User';

import { hashPassword } from './helpers';

import { USER_ACCESS_TOKEN_COOKIE_NAME } from './constants';

import type { Request } from '@types';
import type { AuthenticationContext } from '@adminjs/express/lib/types';

export const authenticateAdmin = async (
  usernameOrEmail: string,
  password: string,
  context: AuthenticationContext
) => {
  const userLoggedByVk = await authenticate(context.req as Request);
  if (userLoggedByVk?.role === Role.Admin) {
    return {
      email: `${userLoggedByVk.firstName} ${userLoggedByVk.lastName}`,
    };
  }

  const hashedPassword = await hashPassword(password);

  const adminsCount = await User.countBy({ role: Role.Admin });

  // Если нет админов, то пускаем первого
  if (!adminsCount) {
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

    return {
      username: user.username,
    };
  });
};

export const authenticate = async (req: Request): Promise<User | null> => {
  const userAccessToken = req.cookies[USER_ACCESS_TOKEN_COOKIE_NAME];

  if (!userAccessToken) {
    return null;
  }

  const user = await User.findOneBy({ userAccessToken });

  return user;
};
