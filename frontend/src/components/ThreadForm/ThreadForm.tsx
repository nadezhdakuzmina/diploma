import * as React from 'react';
import { useSelector } from 'react-redux';

import TagInput from '@components/TagInput';
import CommentDialog from '@components/CommentDialog';

import { selectUserData } from '@data/selectors/user';

import S from './styles.scss';

const ThreadForm: React.FC = () => {
  const [isCommentFormActive, setCommentFormActive] = React.useState(false);

  const userData = useSelector(selectUserData);

  const handleCommentDialogType: React.FormEventHandler = React.useCallback((event) => {
    // @ts-ignore
    setCommentFormActive(event.target.value.length > 0);
  }, []);

  return (
    <div className={S.root}>
        {!userData ? (
            <span className={S.diabledText}>
            Авторизуйтесь, чтобы начать новый тред!
            </span>
        ) : null}
        {isCommentFormActive && (
            <TagInput className={S.tagInput} label="Теги" onTagsChange={console.log} />
        )}
        <CommentDialog disabled={!userData} onChange={handleCommentDialogType} />
    </div>
  );
};

export default ThreadForm;
