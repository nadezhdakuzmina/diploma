import { Country } from '@entities/Country';

export const CountryResouce = {
  resource: Country,
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
