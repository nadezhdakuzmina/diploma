import * as React from 'react';

import Modal from '../Modal';

import S from './styles.module.css';
import Tags from '../Tags';
import PostCard from '../../PostCard';
import Comment from '../Comment';

type ThreadModalProps = {
  onClose: () => void;
  text?: string;
};

const ThreadModal: React.FC<ThreadModalProps> = (props) => {
  return (
    <Modal className={S.root} onClose={props.onClose}>
      <div className={S.content}>
        <PostCard withoutComments={true} />
      </div>
      <div className={S.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </Modal>
  );
};

export default ThreadModal;
