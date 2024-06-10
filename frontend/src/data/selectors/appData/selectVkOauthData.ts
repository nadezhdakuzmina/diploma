import type { State } from '@data/types';
import type { AppData } from '@types';

export const selectVkOauthData = (state: State): AppData['vkOauth'] => state.appData.vkOauth;
