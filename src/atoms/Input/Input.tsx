import React from 'react';

import { css, cx } from '@emotion/css';
import { Color } from '../../utils/constants';
import TextUtils from '../Text/Text.utils';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  className: otherClassName,
  error,
  fill = true,
  onChange,
  value,
  variant = 'body-web',
  ...props
}) => {
  const onChangeWithEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  const baseClassName: string = css({
    ...(fill && { width: '-webkit-fill-available' }),
    '::placeholder': { color: Color.GRAY_300 },
    borderBottomColor: error ? Color.ERROR : Color.BLACK,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1
  });

  const className: string = cx(
    baseClassName,
    TextUtils.textClassNames[variant],
    otherClassName
  );

  return (
    <input
      className={className}
      onChange={onChangeWithEvent}
      type="text"
      value={value ?? ''}
      {...props}
    />
  );
};

export default Input;
