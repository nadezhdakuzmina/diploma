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
    listProperties: ['id', 'name', 'description', 'logoId', 'countryId'],
    showProperties: ['id', 'name', 'description', 'logoId', 'countryId'],
    editProperties: ['name', 'description', 'logoId', 'countryId'],
  },
};
