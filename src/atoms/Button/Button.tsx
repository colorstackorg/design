import React from 'react';

import { css, cx } from '@emotion/css';
import ColorUtils from '../../utils/ColorUtils';
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
  paddingTop: Size.SS,
  transition: 'box-shadow 0.1s ease-in-out'
});

const primaryButtonClassName: string = css({
  ':active': { boxShadow: `inset 0 2px 8px ${Color.GRAY_900}` },
  ':disabled': { backgroundColor: Color.GRAY_500 },
  ':not(:active):focus-visible': { boxShadow: `0px 0px 4px ${Color.TEAL}` },
  backgroundColor: Color.TEAL,
  color: Color.WHITE,
  textTransform: 'uppercase'
});

const secondaryButtonClassName: string = css({
  ':active': { boxShadow: `inset 0 2px 4px ${Color.GRAY_300}` },
  ':disabled': {
    border: `1px ${Color.GRAY_500} solid`,
    color: Color.GRAY_500
  },
  ':not(:active):focus-visible': { boxShadow: `0px 0px 4px ${Color.TEAL}` },
  backgroundColor: Color.WHITE,
  border: `1px ${Color.TEAL} solid`,
  color: Color.TEAL,
  textTransform: 'uppercase'
});

const tertiaryButtonClassName: string = css({
  ':active': { boxShadow: `inset 0 2px 4px ${Color.GRAY_300}` },
  ':disabled': { color: Color.GRAY_500 },
  ':not(:active):focus-visible': {
    backgroundColor: Color.TEAL + ColorUtils.transparency[0.1]
  },
  ':not(:disabled):hover': {
    backgroundColor: Color.TEAL + ColorUtils.transparency[0.1]
  },
  backgroundColor: Color.WHITE,
  color: Color.TEAL,
  paddingBottom: Size.XS,
  paddingTop: Size.XS,
  textDecoration: 'underline'
});

const Button: React.FC<ButtonProps> = ({
  children,
  className: otherClassName,
  disabled,
  loading,
  loadingText,
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
      {loading && !!loadingText ? loadingText : children}
      <ButtonSpinner loading={loading} variant={variant} />
    </button>
  );
};

export default Button;
