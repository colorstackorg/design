import React from 'react';

import { css, cx } from '@emotion/css';
import { Color, Size } from '../../utils/constants';
import { ButtonProps } from './Button.types';
import ButtonSpinner from './ButtonSpinner';

const baseButtonClassName: string = css({
  ':disabled': { cursor: 'not-allowed' },
  ':not(:disabled):hover': { opacity: 0.8 },
  alignItems: 'center',
  borderRadius: Size.XS,
  cursor: 'pointer',
  display: 'flex',
  fontSize: Size.SM,
  fontWeight: 500,
  justifyContent: 'center',
  paddingBottom: Size.SS,
  paddingLeft: Size.SM,
  paddingRight: Size.SM,
  paddingTop: Size.SS
});

const primaryButtonClassName: string = css({
  ':disabled': { backgroundColor: Color.GRAY_500 },
  backgroundColor: Color.TEAL,
  color: Color.WHITE,
  textTransform: 'uppercase'
});

const secondaryButtonClassName: string = css({
  ':disabled': {
    border: `1px ${Color.GRAY_500} solid`,
    color: Color.GRAY_500
  },
  backgroundColor: Color.WHITE,
  border: `1px ${Color.TEAL} solid`,
  color: Color.TEAL,
  textTransform: 'uppercase'
});

const tertiaryButtonClassName: string = css({
  ':disabled': { color: Color.GRAY_500 },
  backgroundColor: Color.WHITE,
  color: Color.TEAL,
  padding: 0,
  textDecoration: 'underline'
});

const Button: React.FC<ButtonProps> = ({
  children,
  className: otherClassName,
  disabled,
  loading,
  type,
  variant = 'primary',
  ...props
}) => {
  // Need to type-cast since props.type can be any string.
  const castedType = (type ?? 'button') as 'button' | 'submit' | 'reset';

  const className: string = cx(
    baseButtonClassName,
    { [primaryButtonClassName]: variant === 'primary' },
    { [secondaryButtonClassName]: variant === 'secondary' },
    { [tertiaryButtonClassName]: variant === 'tertiary' },
    otherClassName
  );

  return (
    <button
      className={className}
      disabled={disabled || loading}
      // eslint-disable-next-line react/button-has-type
      type={castedType}
      {...props}
    >
      {children}
      <ButtonSpinner loading={loading} variant={variant} />
    </button>
  );
};

export default Button;
