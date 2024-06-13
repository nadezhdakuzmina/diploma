import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';
import Tags from '@components/Tags';
import Comment from '@components/Comment';
import CommentDialog from '@components/CommentDialog';

import { selectUserData } from '@data/selectors/user';
import { selectCurrentService } from '@data/selectors/services';

import S from './styles.scss';
import { loadCurrentServiceThunk, postServiceCommentThunk } from '@data/thunk/services';
import { unsetCurrentServiceAction } from '@data/actions/services';

type ServiceModalProps = {
  id: number;
  onClose: () => void;
};

const ServiceModal: React.FC<ServiceModalProps> = (props) => {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const threadData = useSelector(selectCurrentService);

  React.useEffect(() => {
    dispatch(loadCurrentServiceThunk(props.id));

    return () => {
      dispatch(unsetCurrentServiceAction());
    };
  }, [props.id, dispatch]);

  const onCommentSubmit = React.useCallback((text: string) => {
    dispatch(postServiceCommentThunk(props.id, text));
  }, [props.id]);

  return (
    <Modal className={S.root} onClose={props.onClose}>
      {threadData ? (
        <>
          <div className={S.content}>
            <div
              className={S.image}
              style={{ backgroundImage: `url(${threadData.logo?.src})` }}
            />
            <Tags
              className={S.tags}
              tags={['транспорт', 'такси']}
            />
            <h2 className={S.title}>{threadData.name}</h2>
            <span className={S.description}>{threadData.description}</span>
          </div>
          <div className={S.comments}>
            <h2 className={S.title}>
              Комментарии
              <span className={S.commentsCounter}>{threadData.comments.length}</span>
            </h2>
            <div className={S.list}>
              {threadData.comments?.map((comment) => (
                <Comment
                  className={S.comment}
                  user={comment.user}
                  text={comment.text}
                  date={comment.date}
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
              buttonText='Отправить'
              className={S.commentDialog}
              onCommentSubmit={onCommentSubmit}
            />
          </div>
        </>
      ) : null}
    </Modal>
  );
};

export default ServiceModal;
