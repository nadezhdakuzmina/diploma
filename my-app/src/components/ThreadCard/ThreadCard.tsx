import * as React from 'react';
import cn from 'classnames';

import S from './styles.module.css';
import ThreadModal from '../ThreadModal';

type ThreadCardProps = {
  className?: string;
  text: string;
  name: string;
  date: string;
  disableModal?: boolean;
};

const ThreadCard: React.FC<ThreadCardProps> = (props) => {
  const [isModalShown, setModalShown] = React.useState(false);

  const onClick = React.useCallback(() => {
    if (props.disableModal) {
      return;
    }

    setModalShown(true);
  }, [props.disableModal]);

  const handleModalClose = React.useCallback(() => {
    setModalShown(false);
  }, []);

  const firstLetter = props.name[0];

  return (
    <div onClick={onClick} className={cn(S.root, props.className, { [S.clickable]: !props.disableModal })}>
      <div className={S.head}>
        <div className={S.avatar}>{firstLetter}</div>
        <div className={S.headContent}>
          <span className={S.name}>{props.name}</span>
          <span className={S.date}>{props.date}</span>
        </div>
      </div>
      <div className={S.text} dangerouslySetInnerHTML={{ __html: props.text }} />
      <div className={S.footer}>
        <div className={S.activity}>
          <svg className={S.activityIcon} viewBox="0 -0.5 25 25">
            <path d="M12.4997 18.9911L9.5767 15.9911L6.6767 12.9911C5.10777 11.3331 5.10777 8.73809 6.6767 7.08009C7.44494 6.34175 8.48548 5.95591 9.54937 6.01489C10.6133 6.07387 11.6048 6.57236 12.2867 7.39109L12.4997 7.60009L12.7107 7.38209C13.3926 6.56336 14.3841 6.06487 15.448 6.00589C16.5119 5.94691 17.5525 6.33275 18.3207 7.07109C19.8896 8.72909 19.8896 11.3241 18.3207 12.9821L15.4207 15.9821L12.4997 18.9911Z"></path>
          </svg>
          <span className={S.counter}>1923</span>
        </div>
        <div className={S.activity}>
          <svg className={S.activityIcon} viewBox="0 -0.5 25 25">
            <path d="M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z"></path>
          </svg>
          <span className={S.counter}>234</span>
        </div>
      </div>
      {isModalShown && <ThreadModal onClose={handleModalClose} />}
    </div>
  );
};

export default ThreadCard;
