import * as React from 'react';

import Breadcrumbs from '@components/Breadcrumbs';
import ContentWrapper from '@components/ContentWrapper';
import CommentDialog from '@components/CommentDialog';
import TagInput from '@components/TagInput';
import ThreadCard from '@components/ThreadCard';

import S from './styles.scss';

const Treads: React.FC = () => {
  const [isCommentFormActive, setCommentFormActive] = React.useState(false);

  const handleCommentDialogType: React.FormEventHandler = React.useCallback((event) => {
    // @ts-ignore
    setCommentFormActive(event.target.value.length > 0);
  }, []);

  return (
    <ContentWrapper className={S.root}>
      <Breadcrumbs className={S.breadcrumbs} crumbs={[
        {
          link: '/',
          text: 'Главная',
        },
        {
          link: '/country/turkey',
          text: 'Турция',
        },
        {
          link: '/country/turkey/city/instanbul',
          text: 'Стамбул',
        },
        {
          link: '/country/turkey/city/instanbul#threads',
          text: 'Треды',
        },
      ]} />
      <div className={S.commentForm}>
        {isCommentFormActive && (
          <TagInput className={S.tagInput} label="Теги" onTagsChange={console.log} />
        )}
        <CommentDialog onChange={handleCommentDialogType} />
      </div>
      <ThreadCard
        className={S.thread}
        date="Сегодня"
        name="Надежда"
        text="Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира"
      />
      <ThreadCard
        className={S.thread}
        date="Вчера"
        name="Gans"
        text="Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира"
      />
      <ThreadCard
        className={S.thread}
        date="Вчера"
        name="Gans"
        text="Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира"
      />
      <ThreadCard
        className={S.thread}
        date="Вчера"
        name="Gans"
        text="Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира"
      />
      <ThreadCard
        className={S.thread}
        date="Вчера"
        name="Gans"
        text="Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира<br/>Чтобы обмениваться опытом и делиться впечатлениями с 1000+ туристов со всего мира"
      />
    </ContentWrapper>
  );
};

export default Treads;
