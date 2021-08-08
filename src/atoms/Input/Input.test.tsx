import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Color } from '../../utils/constants';
import TextUtils from '../Text/Text.utils';
import Input from './Input';
import { InputProps } from './Input.types';

const inputProps: InputProps = {
  error: false,
  fill: true,
  onChange: jest.fn(),
  value: '1',
  variant: 'body-web'
};

const TEST_STRING = 'Overflow';

describe('<Input />', () => {
  test('The value of the input should change when the value prop changes.', () => {
    const { rerender } = render(<Input {...inputProps} />);
    rerender(<Input {...inputProps} value={TEST_STRING} />);
    const element: HTMLElement = screen.getByRole('textbox');
    expect(element).toHaveValue(TEST_STRING);
  });

  test('When a user types, onChange should be called with string value.', () => {
    render(<Input {...inputProps} />);
    const element: HTMLElement = screen.getByRole('textbox');
    userEvent.type(element, TEST_STRING);
    expect(inputProps.onChange).toHaveBeenCalledTimes(TEST_STRING.length);
  });

  test('If the variant is subtitle, should have the subtitle font class.', () => {
    render(<Input {...inputProps} variant="subtitle" />);
    const element: HTMLElement = screen.getByRole('textbox');

    expect(element).toHaveStyle({
      fontSize: TextUtils.textStyles.subtitle.fontSize
    });
  });

  test('If there is an error, the border color should be red.', () => {
    render(<Input {...inputProps} error />);
    const element: HTMLElement = screen.getByRole('textbox');
    expect(element).toHaveStyle({ borderBottomColor: Color.ERROR });
  });
});
