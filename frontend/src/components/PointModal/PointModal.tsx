import * as React from 'react';

import Modal from '@components/Modal';
import Tags from '@components/Tags';
import Comment from '@components/Comment';
import CommentDialog from '@components/CommentDialog';

import S from './styles.scss';
type PointModalProps = {
  onClose: () => void;
};

const PointModal: React.FC<PointModalProps> = (props) => {
  return (
    <Modal className={S.root} onClose={props.onClose}>
      <div className={S.content}>
        <div
          className={S.image}
          style={{ backgroundImage: `url(${'https://img.avs.io/locals_trap/pois/39e94c6c-0a2e-45bb-8be0-7cbb481917fa?rs=fill:960:960:0&g=ce'})` }}
        />
        <Tags
          className={S.tags}
          tags={['популярное место', 'рекомендации', 'топ100']}
        />
        <h2 className={S.title}>Каосан‑роуд</h2>
        <span className={S.description}>
          Ни минуты покоя: здесь круглые сутки толпятся туристы, галдят продавцы и гремит музыка из баров. Залетайте на улицу Каосан за дешёвыми сувенирами и стритфудом, а на сладкое оставьте массаж — салоны на каждом шагу. Когда устанете от шума, сворачивайте на соседнюю Сои Рамбутри: и в отелях тишина, и до центра Бангкока недалеко.
        </span>
      </div>
      <div className={S.comments}>
        <h2 className={S.title}>
          Комментарии
          <span className={S.commentsCounter}>5</span>
        </h2>
        <div className={S.list}>
          <Comment className={S.comment} name="Marina" text="Там пахнет вкусно!" date="Вчера" />
          <Comment className={S.comment} name="Lisa" text="Кушали с подругой, остались довольны" date="Вчера" />
          <Comment className={S.comment} name="Marina" text="Круасаны продают на той же улице, пышные и вкусные" date="Вчера" />
          <Comment className={S.comment} name="Lisa" text="Спасибо!" date="Вчера" />
          <Comment className={S.comment} name="Bobik" text="Там есть вкусный кофе?" date="Вчера" />
        </div>
        <CommentDialog buttonText='Отправить' className={S.commentDialog} />
      </div>
    </Modal>
  );
};

export default PointModal;
