import { FC } from 'react';
import { createPortal } from 'react-dom';

export const withRenderOnTop = <T extends {}>(Component: FC<T>) => {
  const WrappedComponent: FC<T> = (props) => {
    return createPortal(
      <Component {...props} />,
      window.document.body,
    );
  };

  return WrappedComponent;
};
