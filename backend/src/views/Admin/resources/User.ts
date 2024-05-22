import passwordsFeature from '@adminjs/passwords';

import { User, hashPassword } from '@entities/User';

export const UserResouce = {
  resource: User,
  options: {
    actions: {
      show: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },
    },
    listProperties: ['id', 'email', 'username', 'role'],
    showProperties: ['id', 'email', 'username', 'role'],
    editProperties: ['email', 'username', 'password', 'role'],
  },
  features: [
    passwordsFeature({
      properties: { encryptedPassword: 'password' },
      hash: hashPassword,
    }),
  ],
};
