import { renderHook } from '@testing-library/react-hooks';
import TestUtils from '../utils/TestUtils';
import useBreakpoint from './useBreakpoint';

describe('useBreakpoint()', () => {
  test('Should be a mobile (1) breakpoint.', () => {
    TestUtils.updateDocumentWidth(320);
    const { result } = renderHook(useBreakpoint);
    expect(result.current).toBe(1);
    TestUtils.updateDocumentWidth(568);
    expect(result.current).toBe(1);
  });

  test('Should be a tablet (2) breakpoint.', () => {
    TestUtils.updateDocumentWidth(569);
    const { result } = renderHook(useBreakpoint);
    expect(result.current).toBe(2);
    TestUtils.updateDocumentWidth(1024);
    expect(result.current).toBe(2);
  });

  test('Should be a desktop (3) breakpoint.', () => {
    TestUtils.updateDocumentWidth(1440);
    const { result } = renderHook(useBreakpoint);
    expect(result.current).toBe(3);
    TestUtils.updateDocumentWidth(1025);
    expect(result.current).toBe(3);
  });

  test('Should be a monitor (4) breakpoint.', () => {
    TestUtils.updateDocumentWidth(1441);
    const { result } = renderHook(useBreakpoint);
    expect(result.current).toBe(4);
    TestUtils.updateDocumentWidth(2000);
    expect(result.current).toBe(4);
  });
});
