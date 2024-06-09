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
    listProperties: ['id', 'username', 'name', 'vkId', 'role'],
    showProperties: ['id', 'username', 'name', 'vkId', 'role'],
    editProperties: ['username', 'name', 'vkId', 'role'],
  },
  features: [
    passwordsFeature({
      properties: { encryptedPassword: 'password' },
      hash: hashPassword,
    }),
  ],
};
