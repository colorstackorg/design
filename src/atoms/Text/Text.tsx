import React from 'react';

import { css, cx } from '@emotion/css';
import { Color } from '../../utils/constants';
import Utils from '../../utils/Utils';
import { TextProps } from './Text.types';
import TextUtils from './Text.utils';

const Text: React.FC<TextProps> = ({
  as,
  align = 'left',
  children,
  className: otherClassName,
  color = 'black',
  variant = 'body',
  ...props
}) => {
  const baseClassName: string = css({
    color: Utils.takeFirst(
      [color === 'black', Color.BLACK],
      [color === 'error', Color.ERROR],
      [color === 'gold', Color.GOLD],
      [color === 'teal', Color.TEAL],
      [color === 'white', Color.WHITE]
    ),
    textAlign: align
  });

  const className: string = cx(
    baseClassName,
    TextUtils.textClassNames[variant],
    otherClassName
  );

  const TextElement: keyof Pick<JSX.IntrinsicElements, TextProps['as']> =
    TextUtils.getTextElement(variant, as);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore b/c we know that the text elements have the same signature.
    <TextElement className={className} {...props}>
      {children}
    </TextElement>
  );
};

export default Text;
