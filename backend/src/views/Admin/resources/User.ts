import passwordsFeature from '@adminjs/passwords';

import { User } from '@entities/User';
import { hashPassword } from '@entities/User/helpers';

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
    listProperties: ['email', 'username', 'password'],
    showProperties: ['email', 'username', 'password'],
  },
  features: [
    passwordsFeature({
      properties: { encryptedPassword: 'password' },
      hash: hashPassword,
    }),
  ],
};
