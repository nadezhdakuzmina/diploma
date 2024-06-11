import { Tag } from '@entities/Tag';

export const TagResouce = {
  resource: Tag,
  options: {
    actions: {
      show: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },
    },
    listProperties: ['id', 'name'],
    showProperties: ['id', 'name'],
    editProperties: ['name'],
  },
};
