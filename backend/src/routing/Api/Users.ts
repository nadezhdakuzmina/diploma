import { Router } from 'express';

import { Users } from '@views';

export const UserPath = '/users';
export const UserRouter = Router();

UserRouter.get('/', Users.getUsers);
