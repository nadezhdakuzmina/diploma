import { Thread } from '@entities/Thread';

export const ThreadResouce = {
  resource: Thread,
  options: {
    properties: {
      tags: {
        type: 'many-to-many',
        reference: 'Tag',
        isArray: true,
      },
    },
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
      'date',
      'text',
      'userId',
      'countryId',
      'cityId',
      'tags',
    ],
    showProperties: [
      'id',
      'date',
      'text',
      'userId',
      'countryId',
      'cityId',
      'tags',
    ],
    editProperties: ['date', 'text', 'userId', 'countryId', 'cityId', 'tags'],
  },
};
