import {
  SET_CURRENT_SERVICE,
  SET_SERVICES,
  UNSET_CURRENT_SERVICE,
  UPDATE_SERVICE,
  FLUSH_SERVICES,
} from './actions';

import type { Service, FullService } from '@types';
import type {
  SetCurrentServiceAction,
  SetServicesAction,
  UnsetCurrentServiceAction,
  UpdateServiceAction,
  FlushServicesAction
} from './types';

export const setServicesAction = (services: (FullService | Service)[]): SetServicesAction => ({
  type: SET_SERVICES,
  services,
});

export const updateServiceAction = (service: FullService | Service): UpdateServiceAction => ({
  type: UPDATE_SERVICE,
  service,
});

export const flushServicesAction = (): FlushServicesAction => ({
  type: FLUSH_SERVICES,
});

export const setCurrentServiceAction = (service: FullService): SetCurrentServiceAction => ({
  type: SET_CURRENT_SERVICE,
  service,
});

export const unsetCurrentServiceAction = (): UnsetCurrentServiceAction => ({
  type: UNSET_CURRENT_SERVICE,
});
