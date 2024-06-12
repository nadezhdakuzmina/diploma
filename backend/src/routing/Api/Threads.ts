import { Router } from 'express';

import { Threads } from '@views';

export const ThreadsPath = '/threads';
export const ThreadsRouter = Router();

ThreadsRouter.post('/thread', Threads.postThread);
ThreadsRouter.post('/reaction', Threads.postRection);
ThreadsRouter.post('/comment', Threads.postComment);
ThreadsRouter.get('/thread', Threads.getThread);
ThreadsRouter.get('/', Threads.getThreads);
