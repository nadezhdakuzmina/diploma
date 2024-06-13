import * as React from 'react';

import EntityCard from '@components/EntityCard';
import ServiceModal from '@components/ServiceModal';
import Tags from '@components/Tags';

import S from './styles.scss';

import type { Service } from '@types';

type ServiceCardProps = {
  className?: string;
  service: Service;
};

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const {
    id,
    name,
    description,
    tags,
    logo,
  } = props.service;

  const [activeCard, setIsOpenedModel] = React.useState<boolean>(false);

  const onClick = React.useCallback(() => {
    setIsOpenedModel(true);
  }, []);

  const handleModalClose = React.useCallback(() => {
    setIsOpenedModel(false);
  }, []);

  const tagsList = React.useMemo(() => {
    return tags?.map(({ name }) => name);
  }, [tags]);

  return (
    <EntityCard src={logo?.src} className={props.className} onClick={() => onClick()}>
      <h4 className={S.title}>{name}</h4>
      <span className={S.description}>{description}</span>
      {tagsList && (
        <Tags
          tags={tagsList}
          className={S.tags}
        />
      )}
      {activeCard && (
        <ServiceModal
          id={id}
          onClose={handleModalClose}
        />
      )}
    </EntityCard>
  );
};

export default ServiceCard;
