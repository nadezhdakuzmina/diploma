import { Service } from '@entities/Service';

export const ServiceResouce = {
  resource: Service,
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
      'userId',
      'logoId',
      'countryId',
      'cityId',
      'moderated',
    ],
    showProperties: [
      'id',
      'name',
      'description',
      'userId',
      'logoId',
      'countryId',
      'cityId',
      'moderated',
    ],
    editProperties: [
      'name',
      'description',
      'userId',
      'logoId',
      'countryId',
      'cityId',
      'moderated',
    ],
  },
};
