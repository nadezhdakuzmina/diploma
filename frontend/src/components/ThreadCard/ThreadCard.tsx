import * as React from 'react';

import ThreadContent from '@components/ThreadContent';
import ThreadModal from '@components/ThreadModal';

import type { Thread } from '@types';

type ThreadCardProps = {
  className?: string;
  thread: Thread;
};

const ThreadCard: React.FC<ThreadCardProps> = (props) => {
  const [isModalShown, setModalShown] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setModalShown(true);
  }, []);

  const handleModalClose = React.useCallback(() => {
    setModalShown(false);
  }, []);

  return (
    <>
      <ThreadContent
        onClick={handleClick}
        thread={props.thread}
        className={props.className}
      />
      {isModalShown && (
        <ThreadModal
          id={props.thread.id}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default ThreadCard;
