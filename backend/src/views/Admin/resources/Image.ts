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
    listProperties: ['id', 'src', 'date'],
    showProperties: ['id', 'src', 'date'],
    editProperties: ['src', 'date'],
  },
};
