import { Comment } from '@entities/Comment';

export const CommentResouce = {
  resource: Comment,
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
      'date',
      'text',
      'userId',
      'pointId',
      'threadId',
      'serviceId',
    ],
    showProperties: [
      'id',
      'date',
      'text',
      'userId',
      'pointId',
      'threadId',
      'serviceId',
    ],
    editProperties: [
      'date',
      'text',
      'userId',
      'pointId',
      'threadId',
      'serviceId',
    ],
  },
};
