import { Thread } from '@entities/Thread';

export const ThreadResouce = {
  resource: Thread,
  options: {
    actions: {
      show: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },
    },
    listProperties: ['id', 'date', 'text', 'userId', 'countryId', 'cityId'],
    showProperties: ['id', 'date', 'text', 'userId', 'countryId', 'cityId'],
    editProperties: ['date', 'text', 'userId', 'countryId', 'cityId'],
  },
};
