import * as React from 'react';
import { useSelector } from 'react-redux';

import Breadcrumbs from '@components/Breadcrumbs';
import ContentWrapper from '@components/ContentWrapper';
import ThreadCard from '@components/ThreadCard';
import { ThreadForm } from '@components/ThreadForm';

import { useBreadcrumbs } from '@hooks/useBreadcrumbs';
import { selectThreads } from '@data/selectors/threads';

import S from './styles.scss';

const Threads: React.FC = () => {
  const threads = useSelector(selectThreads);

  const breadcrumbs = useBreadcrumbs({
    name: 'Треды',
    tag: 'threads',
  });

  return (
    <ContentWrapper className={S.root}>
      <Breadcrumbs className={S.breadcrumbs} crumbs={breadcrumbs} />
      <ThreadForm />
      {threads?.map((thread) => (
        <ThreadCard
          key={thread.id}
          className={S.thread}
          thread={thread}
        />
      ))}
    </ContentWrapper>
  );
};

export default Threads;
