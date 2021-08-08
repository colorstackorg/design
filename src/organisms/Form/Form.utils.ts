import validator from 'validator';

import { FormItem } from './Form.types';

export interface IFormUtils {
  validateFormField: (
    field: Pick<FormItem, 'required' | 'validation' | 'value'>
  ) => string;
}

/**
 * Returns an error message based on the value of the item as well as the
 * appropriate validation that should be applied.
 */
const validateFormField = ({
  required,
  value = '', // The validator utility is expecting a defined value.
  validation
}: Pick<FormItem, 'required' | 'validation' | 'value'>): string => {
  // If validation is false, don't validate bro!
  if (validation === false) return null;

  if (required && !value && !validation) {
    return 'Must not be empty.';
  }

  if (validation === 'email') {
    return validator.isEmail(value) ? null : 'Must be a valid email address.';
  }

  if (validation === 'url') {
    return validator.isURL(value) ? null : 'Must be a valid URL.';
  }

  return null;
};

const FormUtils: IFormUtils = {
  validateFormField
};

export default FormUtils;
