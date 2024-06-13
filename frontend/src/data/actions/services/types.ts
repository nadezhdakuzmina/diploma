import {
  SET_CURRENT_SERVICE,
  SET_SERVICES,
  UNSET_CURRENT_SERVICE,
  UPDATE_SERVICE,
  FLUSH_SERVICES,
} from './actions';

import type { Service, FullService } from '@types';
import type { BaseAction } from '@data/types/actions';

export type FlushServicesAction = BaseAction<typeof FLUSH_SERVICES>;

export type SetServicesAction = BaseAction<typeof SET_SERVICES> & {
  services: (FullService | Service)[];
};

export type UpdateServiceAction = BaseAction<typeof UPDATE_SERVICE> & {
  service: FullService | Service;
};

export type SetCurrentServiceAction = BaseAction<typeof SET_CURRENT_SERVICE> & {
  service: FullService;
};

export type UnsetCurrentServiceAction = BaseAction<typeof UNSET_CURRENT_SERVICE>;

export type ActionTypes =
  | FlushServicesAction
  | SetServicesAction
  | UpdateServiceAction
  | SetCurrentServiceAction
  | UnsetCurrentServiceAction;
