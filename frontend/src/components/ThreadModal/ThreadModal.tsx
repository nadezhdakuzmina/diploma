import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';
import Comment from '@components/Comment';
import ThreadContent from '@components/ThreadContent';
import CommentDialog from '@components/CommentDialog';

import { loadCurrentThreadThunk, postThreadCommentThunk } from '@data/thunk/threads';
import { unsetCurrentThreadAction } from '@data/actions/threads';
import { selectCurrentThread } from '@data/selectors/threads';
import { selectUserData } from '@data/selectors/user';

import S from './styles.scss';

type ThreadModalProps = {
  id: number;
  onClose: () => void;
};

const ThreadModal: React.FC<ThreadModalProps> = (props) => {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const threadData = useSelector(selectCurrentThread);
  
  React.useEffect(() => {
    dispatch(loadCurrentThreadThunk(props.id));

    return () => {
      dispatch(unsetCurrentThreadAction());
    };
  }, [props.id, dispatch]);

  const onCommentSubmit = React.useCallback((text: string) => {
    dispatch(postThreadCommentThunk(props.id, text));
  }, [props.id]);

  return (
    <Modal onClose={props.onClose}>
      {threadData ? (
        <>
          <ThreadContent
            className={S.thread}
            thread={threadData}
          />
          <h2 className={S.commentsTitle}>
            Комментарии
            <span className={S.commentsCounter}>{threadData.comments.length}</span>
          </h2>
          <div className={S.comments}>
            {threadData.comments.map(({ user, text, date }) => (
              <Comment
                className={S.comment}
                user={user}
                text={text}
                date={date}
              />
            ))}
          </div>
          {!userData ? (
              <span className={S.diabledText}>
              Авторизуйтесь, чтобы оставить комментарий!
              </span>
          ) : null}
          <CommentDialog
            disabled={!userData}
            className={S.commentDialog}
            onCommentSubmit={onCommentSubmit}
          />
        </>
      ) : (
        <>Что за бизнес? Что за бизнес</>
      )}
    </Modal>
  );
};

export default ThreadModal;
