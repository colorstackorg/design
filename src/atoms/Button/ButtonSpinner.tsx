import React from 'react';

import { css, keyframes } from '@emotion/css';
import ColorUtils from '../../utils/ColorUtils';
import { Color, Size } from '../../utils/constants';
import Utils from '../../utils/Utils';
import { ButtonProps } from './Button.types';

const ButtonSpinner: React.FC<Pick<ButtonProps, 'loading' | 'variant'>> = ({
  loading,
  variant
}) => {
  // If the button isn't in a loading state or the button is a tertiary button,
  // don't show the spinner!
  if (!loading || variant === 'tertiary') return null;

  const color: string = Utils.takeFirst(
    [variant === 'primary', Color.WHITE],
    [variant === 'secondary', Color.GRAY_500]
  );

  const borderOpacity: number = Utils.takeFirst(
    [variant === 'primary', 0.4],
    [variant === 'secondary', 0.2]
  );

  const rotateAnimation: string = keyframes({
    from: { transform: 'rotate(0)' },
    to: { transform: 'rotate(360deg)' }
  });

  const className: string = css({
    animation: `${rotateAnimation}`,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationName: rotateAnimation,
    animationTimingFunction: 'ease-in-out',
    borderColor: color + ColorUtils.transparency[borderOpacity],
    borderLeftColor: color,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderTopColor: color,
    borderWidth: 3,
    height: Size.SM,
    marginLeft: Size.SM,
    width: Size.SM
  });

  return (
    <span
      role="status"
      aria-busy="true"
      aria-label="Button Spinner"
      className={className}
    />
  );
};

export default ButtonSpinner;
