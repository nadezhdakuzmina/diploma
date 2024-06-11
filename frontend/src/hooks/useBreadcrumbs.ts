import { useSelector } from 'react-redux';

import { selectCurrentCountry } from '@data/selectors/countries/selectCurrentCountry';
import { selectCurrentCity } from '@data/selectors/cities/selectCurrentCity';
import { getCountryUrl } from '@utils/getCountryUrl';
import { getCityUrl } from '@utils/getCityUrl';

import type { Crumb } from '@components/Breadcrumbs/Breadcrumbs';

export type ExtraServiceTag = {
  name: string;
  tag: string;
};

export const useBreadcrumbs = (extraServiceTag?: ExtraServiceTag): Crumb[] => {
  const currentCountry = useSelector(selectCurrentCountry);
  const currentCity = useSelector(selectCurrentCity);

  const crumbs: Crumb[] = [
    {
      text: 'Главная',
      link: '/',
    },
  ];

  if (currentCountry) {
    crumbs.push({
      text: currentCountry.name,
      link: getCountryUrl(currentCountry),
    });

    if (currentCity) {
      crumbs.push({
        text: currentCity.name,
        link: getCityUrl(currentCountry, currentCity),
      });
    }
  }

  if (extraServiceTag) {
    const lastUrl = crumbs[crumbs.length - 1].link;

    crumbs.push({
      text: extraServiceTag.name,
      link: `${lastUrl}#${extraServiceTag.tag}`,
    });
  }

  return crumbs;
};
