import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TagInput from '@components/TagInput';
import CommentDialog from '@components/CommentDialog';

import { selectUserData } from '@data/selectors/user';

import S from './styles.scss';
import { postThreadThunk } from '@data/thunk/threads';

const ThreadForm: React.FC = () => {
  const [isCommentFormActive, setCommentFormActive] = React.useState(false);
  const [tags, setTags] = React.useState<string[]>([]);

  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);

  const handleCommentDialogType: React.FormEventHandler = React.useCallback((event) => {
    // @ts-ignore
    setCommentFormActive(event.target.value.length > 0);
  }, []);

  const handleTagsChange = React.useCallback((tags: string[]) => {
    setTags(tags);
  }, []);

  const handleFormSubmit = React.useCallback((text: string) => {
    dispatch(postThreadThunk(text, tags));
    setTags([]);
  }, [tags, dispatch]);

  return (
    <div className={S.root}>
      {!userData ? (
        <span className={S.diabledText}>
          Авторизуйтесь, чтобы начать новый тред!
        </span>
      ) : null}
      {isCommentFormActive && (
        <TagInput
          tags={tags}
          className={S.tagInput}
          label="Теги"
          onTagsChange={handleTagsChange}
        />
      )}
      <CommentDialog
        disabled={!userData}
        onChange={handleCommentDialogType}
        onCommentSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default ThreadForm;
