import { Router } from 'express';

import { ApiRouter } from './index';
import { Users } from '@views';

export const UserPath = '/users';
export const UserRouter = Router();

UserRouter.get('/', Users.getUsers);
