interface IUtils {
  isDefined: (input: unknown) => boolean;
  takeFirst: <T>(...args: ([boolean, T] | T)[]) => T;
  uuid: () => string;
}

/**
 * Returns true if the input is defined. Note that if the input is an empty
 * string, an empty array, or empty object, isDefined() will return true
 *
 * @example
 * // Returns true.
 * isDefined(null);
 *
 * @example
 * // Returns false.
 * isDefined(undefined);
 *
 * @example
 * // Returns true.
 * isDefined('');
 *
 * @example
 * // Returns true.
 * isDefined([]);
 */
const isDefined = (input: unknown): boolean => {
  return input !== undefined;
};

/**
 * Returns the value of the first pair whose first element evaluates to true.
 *
 * @param args Array of pairs structured as [boolean, value].
 * @throws Error if a non-tuple is supplied for the non-last element.
 */
function takeFirst<T>(...args: ([boolean, T] | T)[]): T {
  // If the first argument is undefined, then return null. B/c we spread the
  // ..args, even the "undefined" will come in an array.
  if (!isDefined(args?.[0])) return null;

  const { length } = args;

  for (let i = 0; i < length; i += 1) {
    const element: T | [boolean, T] = args[i];

    if (!Array.isArray(element) && i !== length - 1) {
      throw new Error(
        'You must supply a tuple for all elements except for the last element.'
      );
    }

    // If it's not a tuple, return the element.
    if (!Array.isArray(element)) return element;

    // If it is a tuple and the first element is true, return the second
    // element.
    if (element[0]) return element[1];
  }

  return null;
}

/**
 * Returns a v4 UUID. Used to create unique ID for each toast (which is then used when removing
 * the toast from the DOM after timeout).
 *
 * @see https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
 */
const uuid = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (letter) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = letter === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const Utils: IUtils = {
  isDefined,
  takeFirst,
  uuid
};

export default Utils;
