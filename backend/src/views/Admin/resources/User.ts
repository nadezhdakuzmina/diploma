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
    listProperties: ['id', 'username', 'firstName', 'lastName', 'vkId', 'role'],
    showProperties: ['id', 'username', 'firstName', 'lastName', 'vkId', 'role'],
    editProperties: ['username', 'firstName', 'lastName', 'vkId', 'role'],
  },
  features: [
    passwordsFeature({
      properties: { encryptedPassword: 'password' },
      hash: hashPassword,
    }),
  ],
};
