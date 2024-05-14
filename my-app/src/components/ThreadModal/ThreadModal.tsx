import * as React from 'react';

import Modal from '../Modal';
import Comment from '../Comment';

import S from './styles.module.css';
import ThreadCard from '../ThreadCard';
import CommentDialog from '../CommentDialog';

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
