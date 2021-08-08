import cases from 'jest-in-case';

import { TestObject } from './TestUtils';
import Utils from './Utils';

cases(
  'Utils.isDefined()',
  ({ input, output }: TestObject<unknown, boolean>) => {
    expect(Utils.isDefined(input)).toBe(output);
  },
  {
    'Is empty string.': { input: '', output: true },
    'Is false.': { input: false, output: true },
    'Is null.': { input: null, output: true },
    'Is regular string.': { input: 'test', output: true },
    'Is undefined.': { input: undefined, output: false },
    'Is zero.': { input: 0, output: true }
  }
);

describe('Utils.takeFirst()', () => {
  test('Has a non-tuple on the non-last element.', () => {
    expect(() => Utils.takeFirst(1, [true, 2], [true, 3])).toThrowError();
  });

  test('Is of length 0 returns null.', () => {
    expect(Utils.takeFirst()).toBe(null);
  });

  test('Is of length 1 and is truthy value returns first value.', () => {
    expect(Utils.takeFirst([true, 1])).toBe(1);
  });

  test('Is of length 2 and has no truthy values returns null.', () => {
    expect(Utils.takeFirst([false, 'a'], [false, 'c'])).toBe(null);
  });

  test('Is of length 3 and last tuple is truthy value returns last value.', () => {
    expect(Utils.takeFirst([false, 'a'], [false, 'b'], [true, 'c'])).toBe('c');
  });
});
