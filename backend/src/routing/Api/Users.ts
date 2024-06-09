import { Router } from 'express';

import { Users } from '@views';

export const UserPath = '/users';
export const UserRouter = Router();

UserRouter.get('/oauth', Users.oauth);
UserRouter.get('/getUserData', Users.getUserData);
UserRouter.get('/logout', Users.logout);
