import * as React from 'react';

import EntityCard from '../EntityCard';

import S from './styles.module.css';

type ServiceCardProps = {
  className?: string;
  src: string;
  name: string;
  description: string;
  tags?: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <EntityCard src={props.src} className={props.className}>
      <h4 className={S.title}>{props.name}</h4>
      <span className={S.description}>{props.description}</span>
      <div className={S.tags}>
        {props.tags?.map((tag) => (
          <div key={tag} className={S.tag}>#{tag}</div>
        ))}
      </div>
    </EntityCard>
  );
};

export default ServiceCard;
