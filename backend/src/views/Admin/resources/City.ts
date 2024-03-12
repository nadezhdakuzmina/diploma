import { City } from '@entities/City';

export const CityResouce = {
  resource: City,
  options: {
    actions: {
      show: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },
    },
    listProperties: ['name'],
    showProperties: ['name'],
  },
};
