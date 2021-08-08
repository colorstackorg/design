import { useEffect, useState } from 'react';

import Utils from '../utils/Utils';

// 1: Mobile
// 2: Tablet
// 3: Desktop
// 4: Monitor
export type Breakpoint = 1 | 2 | 3 | 4;

/**
 * Returns the appropriate breakpoint based on window width.
 *
 * @example useBreakpoint() => 1 (Mobile)
 * @example useBreakpoint() => 2 (Tablet)
 * @example useBreakpoint() => 3 (Desktop)
 * @example useBreakpoint() => 4 (Monitor)
 */
const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(null);

  const onWindowResize = (): void => {
    const { innerWidth } = window;

    const updatedBreakpoint: Breakpoint = Utils.takeFirst(
      [innerWidth > 1440, 4],
      [innerWidth <= 1440 && innerWidth > 1024, 3],
      [innerWidth <= 1024 && innerWidth >= 569, 2],
      1
    );

    setBreakpoint(updatedBreakpoint);
  };

  // Add the window resize event listener.
  useEffect(() => {
    onWindowResize(); // Set the initial values.
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
