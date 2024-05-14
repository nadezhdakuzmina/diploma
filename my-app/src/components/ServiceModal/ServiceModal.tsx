import * as React from 'react';

import Modal from '../Modal';

import S from './styles.module.css';
import Tags from '../Tags';
import Comment from '../Comment';

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
        <span className={S.description}>Сервис такси</span>
      </div>
      <div className={S.comments}>
        <h2 className={S.title}>Комментарии</h2>
        <div className={S.list}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
