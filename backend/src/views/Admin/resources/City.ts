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
    listProperties: [
      'id',
      'name',
      'description',
      'lng',
      'lat',
      'logoId',
      'countryId',
    ],
    showProperties: [
      'id',
      'name',
      'description',
      'lng',
      'lat',
      'logoId',
      'countryId',
    ],
    editProperties: [
      'name',
      'description',
      'lng',
      'lat',
      'logoId',
      'countryId',
    ],
  },
};
