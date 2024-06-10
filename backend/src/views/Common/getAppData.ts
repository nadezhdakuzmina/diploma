import { VK_APP_ID } from '@constants';

import type { Request, Response } from '@types';

export const getAppData = async (req: Request, res: Response) => {
  res.json({
    vkOauth: {
      appId: VK_APP_ID,
      redirectUri: '/api/users/oauth',
    },
  });
};
