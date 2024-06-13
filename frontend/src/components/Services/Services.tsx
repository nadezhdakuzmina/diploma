import * as React from 'react';
import { useSelector } from 'react-redux';

import ContentWrapper from '@components/ContentWrapper';
import ServiceCard from '@components/ServiceCard';
import Breadcrumbs from '@components/Breadcrumbs';
import AddServiceDialog from '@components/AddServiceDialog';

import { useBreadcrumbs } from '@hooks/useBreadcrumbs';
import { selectServices } from '@data/selectors/services';

import S from './styles.scss';

import { selectUserData } from '@data/selectors/user';

const Services: React.FC = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const breadcrumbs = useBreadcrumbs({
    name: 'Сервисы',
    tag: 'services',
  });

  const services = useSelector(selectServices);
  const userData = useSelector(selectUserData);

  const openFormHandler = React.useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeFormHandler = React.useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <ContentWrapper className={S.root}>
      <Breadcrumbs className={S.breadcrumbs} crumbs={breadcrumbs} />
      <div className={S.addServiceForm}>
        {userData ? (
          <span className={S.addServiceFormText}>
            Вы можете опубликовать новый сервис, для этого{' '}
            <span
              onClick={openFormHandler}
              className={S.openFormLink}
            >
              заполните форму.
            </span>
          </span>
        ) : (
          <span className={S.addServiceFormText}>
            Авторизуйтесь, чтобы опубликовать новый сервис!
          </span>
        )}
      </div>
      <div className={S.content}>
        {services?.length ? services.map((service) => (
          <ServiceCard
            key={service.id}
            className={S.card}
            service={service}
          />
        )) : null}
      </div>
      {isModalOpen ? (
        <AddServiceDialog onClose={closeFormHandler} /> 
      ): null}
    </ContentWrapper>
  );
};

export default Services;
