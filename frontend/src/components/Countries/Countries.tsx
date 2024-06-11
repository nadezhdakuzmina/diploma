import * as React from 'react';
import { useSelector } from 'react-redux';

import ContentWrapper from '@components/ContentWrapper';
import PlaceCard from '@components/PlaceCard';
import Breadcrumbs from '@components/Breadcrumbs';

import { selectCountries } from '@data/selectors/countries';
import { useBreadcrumbs } from '@hooks/useBreadcrumbs';

import S from './styles.scss';

const Cities: React.FC = () => {
  const coutnries = useSelector(selectCountries);

  const breadcrumbs = useBreadcrumbs({
    name: 'Страны',
    tag: 'countries',
  });

  return (
    <ContentWrapper className={S.root}>
      <Breadcrumbs className={S.breadcrumbs} crumbs={breadcrumbs} />
      <div className={S.content}>
        {coutnries?.map((item) => (
          <PlaceCard
            key={item.id}
            className={S.card}
            name={item.name}
            src={item.logo?.src}
            link={`/country/${item.slug}`}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Cities;
