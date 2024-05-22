import { Image } from '@entities/Image';

export const ImageResouce = {
  resource: Image,
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
      'src',
      'date',
      'countryId',
      'cityId',
      'serviceId',
      'pointId',
    ],
    showProperties: [
      'id',
      'src',
      'date',
      'countryId',
      'cityId',
      'serviceId',
      'pointId',
    ],
    editProperties: [
      'src',
      'date',
      'countryId',
      'cityId',
      'serviceId',
      'pointId',
    ],
  },
};
