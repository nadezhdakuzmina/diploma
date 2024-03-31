import * as React from 'react';

export const useOutsideClick = <T extends HTMLElement>(onOutsideClick: () => void) => {
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as HTMLElement)) {
        onOutsideClick();
      }
    };

    window.document.addEventListener('click', handleClick);

    return () => {
      window.document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
