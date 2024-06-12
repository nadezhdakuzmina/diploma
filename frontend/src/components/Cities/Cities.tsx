import * as React from 'react';
import { useSelector } from 'react-redux';

import ContentWrapper from '@components/ContentWrapper';
import PlaceCard from '@components/PlaceCard';
import Breadcrumbs from '@components/Breadcrumbs';

import { selectCities } from '@data/selectors/cities';
import { selectCurrentCountry } from '@data/selectors/countries';
import { getCityUrl } from '@utils/getCityUrl';
import { useBreadcrumbs } from '@hooks/useBreadcrumbs';

import S from './styles.scss';

const Cities: React.FC = () => {
  const cities = useSelector(selectCities);
  const currentCountry = useSelector(selectCurrentCountry);

  const breadcrumbs = useBreadcrumbs({
    name: 'Города',
    tag: 'cities',
  });

  return (
    <ContentWrapper className={S.root}>
      <Breadcrumbs className={S.breadcrumbs} crumbs={breadcrumbs} />
      <div className={S.content}>
        {currentCountry && cities?.map((item) => (
          <PlaceCard
            key={item.id}
            className={S.card}
            name={item.name}
            src={item.logo?.src}
            link={getCityUrl(currentCountry, item)}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Cities;
