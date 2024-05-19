import { createContext } from 'react';

import type { TabsContext } from './types';

export const Context = createContext<TabsContext | null>(null);
