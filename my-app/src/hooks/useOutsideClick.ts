import * as React from 'react';

export const useOutsideClick = <T extends HTMLElement>(onOutsideClick: () => void) => {
  const [ref, setRef] = React.useState<T | null>(null);

  React.useEffect(() => {
    if (!ref) {
      return;
    }
    
    const handleClick = (event: MouseEvent) => {
      if (!ref?.contains(event.target as HTMLElement)) {
        onOutsideClick();
      }
    };

    setTimeout(() => {
      window.document.addEventListener('click', handleClick);
    });

    return () => {
      window.document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return setRef;
};
