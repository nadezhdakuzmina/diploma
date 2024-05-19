import * as React from 'react';

import Modal from '@components/Modal';
import Tags from '@components/Tags';
import Comment from '@components/Comment';
import CommentDialog from '@components/CommentDialog';

import S from './styles.scss';

type ServiceModalProps = {
  onClose: () => void;
};

const ServiceModal: React.FC<ServiceModalProps> = (props) => {
  return (
    <Modal className={S.root} onClose={props.onClose}>
      <div className={S.content}>
        <div
          className={S.image}
          style={{ backgroundImage: `url(${'https://avatars.dzeninfra.ru/get-zen_doc/9804207/pub_6481ed3a6094ff55e8a9520c_6481edf01dfacb4481da756c/scale_1200'})` }}
        />
        <Tags
          className={S.tags}
          tags={['транспорт', 'такси']}
        />
        <h2 className={S.title}>Uber</h2>
        <span className={S.description}>Сервис такси. Можно заказать такси в любом месте и в любое время. Пожалуй самый удобный вариант для этого города. Цены конечно кусаются =)</span>
      </div>
      <div className={S.comments}>
        <h2 className={S.title}>
          Комментарии
          <span className={S.commentsCounter}>2</span>
        </h2>
        <div className={S.list}>
          <Comment className={S.comment} name="Marina" text="Такси 5 звезд!" date="Вчера" />
          <Comment className={S.comment} name="Bobik" text="Доехал до центра за 100 батт" date="Вчера" />
        </div>
        <CommentDialog buttonText='Отправить' className={S.commentDialog} />
      </div>
    </Modal>
  );
};

export default ServiceModal;
