import { act } from '@testing-library/react';

interface ITestUtils {
  updateDocumentWidth: (width: number) => void;
}

/**
 * Updates the document's width within a Jest test for a component. By default,
 * Jest tests render under a standard desktop size, but certain tests may need
 * to be run in a tablet breakpoint, or mobile breakpoint.
 */
const updateDocumentWidth = (width: number): void => {
  act(() => {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
  });
};

const TestUtils: ITestUtils = {
  updateDocumentWidth
};

export default TestUtils;
