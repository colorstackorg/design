import '@testing-library/jest-dom';
import 'jest-canvas-mock'; // Needed for react-lottie tests.

import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
