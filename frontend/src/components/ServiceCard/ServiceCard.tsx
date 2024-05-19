import * as React from 'react';

import EntityCard from '@components/EntityCard';
import ServiceModal from '@components/ServiceModal';
import Tags from '@components/Tags';

import S from './styles.scss';

type ServiceCardProps = {
  className?: string;
  src: string;
  name: string;
  description: string;
  tags?: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const [activeCard, setIsOpenedModel] = React.useState<boolean>(false);
  const onClick = React.useCallback(() => {
    setIsOpenedModel(true);
  }, []);
  const handleModalClose = React.useCallback(() => {
    setIsOpenedModel(false);
  }, []);

  return (
    <EntityCard src={props.src} className={props.className} onClick={() => onClick()}>
      <h4 className={S.title}>{props.name}</h4>
      <span className={S.description}>{props.description}</span>
      {props.tags && (
        <Tags
          tags={props.tags}
          className={S.tags}
        />
      )}
      {activeCard && (
        <ServiceModal
          onClose={handleModalClose}
        />
      )}
    </EntityCard>
  );
};

export default ServiceCard;