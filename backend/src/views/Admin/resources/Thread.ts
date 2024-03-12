import { Thread } from '@entities/Thread';

export const ThreadResource = {
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
    listProperties: ['name'],
    showProperties: ['name'],
  },
};
