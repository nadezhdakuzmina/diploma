import { Router } from 'express';

import { Common } from '@views';

export const CommonPath = '/common';
export const CommonRouter = Router();

CommonRouter.get('/appdata', Common.getAppData);
