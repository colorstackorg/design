import { useLayoutEffect } from 'react';

/**
 * Disables any scrolling on the <body> element. This is typically used if
 * there is an element such a <Modal /> on the screen.
 *
 * @see https://usehooks.com/useLockBodyScroll/
 */
const useLockBodyScroll = (): void => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when component unmounts.
      document.body.style.overflow = 'auto';
    };
  }, []);
};

export default useLockBodyScroll;
