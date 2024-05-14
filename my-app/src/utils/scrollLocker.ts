export const scrollLocker = () => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const defaultStyle = window.document.body.style.overflowY;
  window.document.body.style.overflowY = 'hidden';

  const unlock = () => {
    window.document.body.style.overflowY = defaultStyle;
  };

  return unlock;
};
