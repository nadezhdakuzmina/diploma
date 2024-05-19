import * as React from 'react';

import Modal from '@components/Modal';
import Comment from '@components/Comment';
import ThreadCard from '@components/ThreadCard';
import CommentDialog from '@components/CommentDialog';

import S from './styles.scss';

type ThreadModalProps = {
  onClose: () => void;
  text?: string;
};

const ThreadModal: React.FC<ThreadModalProps> = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <ThreadCard
        className={S.thread}
        name="Надежда"
        date="Сегодня"
        text="Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира"
        disableModal
      />
      <h2 className={S.commentsTitle}>
        Комментарии
        <span className={S.commentsCounter}>2</span>
      </h2>
      <div className={S.comments}>
        <Comment name="Marina" text="Согласен полностью" date="today" />
        <Comment name="Marina" text="Отлично" date="today" />
        <CommentDialog className={S.commentDialog} />
      </div>
    </Modal>
  );
};

export default ThreadModal;
