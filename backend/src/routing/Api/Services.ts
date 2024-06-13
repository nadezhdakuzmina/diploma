import { Router } from 'express';

import { Services } from '@views';

export const ServicesPath = '/services';
export const ServicesRouter = Router();

ServicesRouter.post('/service', Services.postService);
ServicesRouter.post('/comment', Services.postComment);
ServicesRouter.get('/service', Services.getService);
ServicesRouter.get('/', Services.getServices);
