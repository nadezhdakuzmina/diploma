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
    listProperties: ['id', 'name', 'description', 'logoId', 'slug'],
    showProperties: ['id', 'name', 'description', 'logoId', 'slug'],
    editProperties: ['name', 'description', 'logoId', 'slug'],
  },
};
