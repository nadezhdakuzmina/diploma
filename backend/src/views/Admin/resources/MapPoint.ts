import { MapPoint } from '@entities/MapPoint';

export const MapPointResouce = {
  resource: MapPoint,
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
      'type',
      'lng',
      'lat',
      'userId',
      'cityId',
      'moderated',
    ],
    showProperties: [
      'id',
      'name',
      'description',
      'type',
      'lng',
      'lat',
      'userId',
      'cityId',
      'moderated',
    ],
    editProperties: [
      'name',
      'description',
      'type',
      'lng',
      'lat',
      'userId',
      'cityId',
      'moderated',
    ],
  },
};
