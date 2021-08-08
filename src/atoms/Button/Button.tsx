import React from 'react';

import { css, cx } from '@emotion/css';
import { Color, Size } from '../../utils/constants';
import { ButtonProps } from './Button.types';
import ButtonSpinner from './ButtonSpinner';

const baseButtonClassName: string = css({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: 1.5,
  paddingBottom: Size.SS,
  paddingLeft: Size.SM,
  paddingRight: Size.SM,
  paddingTop: Size.SS
});

const primaryButtonClassName: string = css({
  backgroundColor: Color.BLACK,
  color: Color.WHITE,
  textTransform: 'uppercase'
});

const secondaryButtonClassName: string = css({
  backgroundColor: Color.WHITE,
  border: `1px ${Color.BLACK} solid`,
  color: Color.BLACK,
  textTransform: 'uppercase'
});

const textButtonClassName: string = css({
  backgroundColor: Color.WHITE,
  color: Color.BLACK,
  padding: 0,
  textDecoration: 'underline'
});

const smallButtonClassName: string = css({ fontSize: 10 });
const largeButtonClassName: string = css({ fontSize: 16 });

const cursorNotAllowedClassName: string = css({ cursor: 'not-allowed' });

const Button: React.FC<ButtonProps> = ({
  children,
  className: otherClassName,
  disabled,
  loading,
  size = 'large',
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
    { [textButtonClassName]: variant === 'text' },
    { [smallButtonClassName]: size === 'small' },
    { [largeButtonClassName]: size === 'large' },
    { [cursorNotAllowedClassName]: disabled || loading },
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
      <ButtonSpinner loading={loading} size={size as never} variant={variant} />
    </button>
  );
};

export default Button;
