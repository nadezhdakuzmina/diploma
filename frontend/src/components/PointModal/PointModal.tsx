import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@components/Modal';
import Tags from '@components/Tags';
import Comment from '@components/Comment';
import CommentDialog from '@components/CommentDialog';

import { selectCurrentPoint } from '@data/selectors/points/selectCurrentPoint';
import { selectUserData } from '@data/selectors/user';
import { postPointCommentThunk } from '@data/thunk/points';

import S from './styles.scss';

type PointModalProps = {
  onClose: () => void;
};

const PointModal: React.FC<PointModalProps> = (props) => {
  const dispatch = useDispatch();

  const currentPoint = useSelector(selectCurrentPoint);
  const userData = useSelector(selectUserData);

  const {
    id: pointId,
    name,
    description,
    tags,
    images,
    comments,
  } = currentPoint || {};

  const tagsList = React.useMemo(() => {
    return tags?.map(({ name }) => name) || [];
  }, [tags]);

  const onCommentSubmit = React.useCallback((text: string) => {
    dispatch(postPointCommentThunk(pointId, text));
  }, [pointId]);

  return (
    <Modal className={S.root} onClose={props.onClose}>
      {currentPoint ? (
        <>
          <div className={S.content}>
            <div
              className={S.image}
              style={{ backgroundImage: `url(${images[0]?.src})` }}
            />
            {tagsList.length > 0 ? (
              <Tags
                className={S.tags}
                tags={tagsList}
              />
            ) : null}
            <h2 className={S.title}>{name}</h2>
            <span className={S.description}>{description}</span>
          </div>
          <div className={S.comments}>
            <h2 className={S.commentTitle}>
              Комментарии
              <span className={S.commentsCounter}>{comments.length}</span>
            </h2>
            <div className={S.list}>
              {comments.map(({ id, text, user, date }) => (
                <Comment
                  key={id}
                  className={S.comment}
                  user={user}
                  text={text}
                  date={date}
                />
              ))}
            </div>
            <CommentDialog
              buttonText='Отправить'
              className={S.commentDialog}
              disabled={!userData}
              onCommentSubmit={onCommentSubmit}
            />
          </div>
        </>
      ) : null}
    </Modal>
  );
};

export default PointModal;
