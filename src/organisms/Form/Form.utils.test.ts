import cases from 'jest-in-case';

import { TestObject } from '../../utils/types';
import { FormItem } from './Form.types';
import FormUtils from './Form.utils';

cases(
  'FormUtils.validateFormField()',
  ({
    input,
    output
  }: TestObject<
    Pick<FormItem, 'required' | 'validation' | 'value'>,
    string
  >) => {
    expect(FormUtils.validateFormField(input)).toBe(output);
  },
  {
    'If required, there is no value and there is no other validation, return empty error message.':
      {
        input: { required: true, value: '' },
        output: 'Must not be empty.'
      },

    'If validation is email, and value is an email, return null.': {
      input: { required: true, validation: 'email', value: 'team@overflow.co' },
      output: null
    },

    'If validation is email, and value is not an email, return error message.':
      {
        input: { required: true, validation: 'email', value: 'Not an Email' },
        output: 'Must be a valid email address.'
      },

    'If validation is false, returns no error message.': {
      input: { required: true, validation: false, value: 'Rami Abdou' },
      output: null
    },

    'If validation is url, and value is a URL, return null.': {
      input: { required: true, validation: 'url', value: 'overflow.co' },
      output: null
    },

    'If validation is url, and value is not a URL, return error message.': {
      input: { required: true, validation: 'url', value: 'Not a URL' },
      output: 'Must be a valid URL.'
    }
  }
);
