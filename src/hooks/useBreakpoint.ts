import { useEffect, useState } from 'react';

import Utils from '../utils/Utils';

// 1: Mobile
// 2: Tablet
// 3: Desktop
// 4: Monitor
export type Breakpoint = 1 | 2 | 3 | 4;

export const getBreakpoint = (): Breakpoint => {
  const { innerWidth: width } = window;

  return Utils.takeFirst(
    [width > 1440, 4],
    [width <= 1440 && width > 1024, 3],
    [width <= 1024 && width >= 569, 2],
    1
  );
};

/**
 * Returns the appropriate breakpoint based on window width.
 *
 * @example useBreakpoint() => 1 (Mobile)
 * @example useBreakpoint() => 2 (Tablet)
 * @example useBreakpoint() => 3 (Desktop)
 * @example useBreakpoint() => 4 (Monitor)
 */
const useBreakpoint = (): Breakpoint => {
  const initialBreakpoint: Breakpoint = getBreakpoint();
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(initialBreakpoint);

  const onWindowResize = (): void => {
    const updatedBreakpoint: Breakpoint = getBreakpoint();
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
