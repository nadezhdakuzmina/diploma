import { Router } from 'express';

import { Search } from '@views';

export const SearchPath = '/search';
export const SearchRouter = Router();

SearchRouter.get('/', Search.search);
