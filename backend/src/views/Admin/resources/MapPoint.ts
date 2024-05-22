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
      'lng',
      'lat',
      'userId',
      'cityId',
    ],
    showProperties: [
      'id',
      'name',
      'description',
      'lng',
      'lat',
      'userId',
      'cityId',
    ],
    editProperties: ['name', 'description', 'lng', 'lat', 'userId', 'cityId'],
  },
};
