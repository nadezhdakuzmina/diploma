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
    listProperties: ['id', 'name', 'description', 'logoId'],
    showProperties: ['id', 'name', 'description', 'logoId'],
    editProperties: ['name', 'description', 'logoId'],
  },
};
