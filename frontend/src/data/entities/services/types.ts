import type { Service, FullService } from '@types';

export type ServicesState = {
  services: (FullService | Service)[] | null;
  currentService: FullService | null;
};
