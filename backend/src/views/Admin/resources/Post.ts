import { Post } from '@entities/Post';

export const PostResouce = {
  resource: Post,
  options: {
    actions: {
      show: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },
    },
    listProperties: ['name', 'description'],
    showProperties: ['name', 'description'],
  },
};
