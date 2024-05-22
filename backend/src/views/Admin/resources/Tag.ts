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
    listProperties: ['id', 'name', 'pointId', 'threadId', 'serviceId'],
    showProperties: ['id', 'name', 'pointId', 'threadId', 'serviceId'],
    editProperties: ['name', 'pointId', 'threadId', 'serviceId'],
  },
};
