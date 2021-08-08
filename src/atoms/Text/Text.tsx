import React from 'react';

import { css, cx } from '@emotion/css';
import { Color } from '../../utils/constants';
import { TextProps } from './Text.types';
import TextUtils from './Text.utils';

const colorBlack: string = css({ color: Color.BLACK });
const colorRed: string = css({ color: Color.ERROR });
const colorSalmon: string = css({ color: Color.SALMON });
const colorWhite: string = css({ color: Color.WHITE });

const textAlignCenter: string = css({ textAlign: 'center' });
const textAlignLeft: string = css({ textAlign: 'left' });
const textAlignRight: string = css({ textAlign: 'right' });

const Text: React.FC<TextProps> = ({
  as,
  align = 'left',
  children,
  className: otherClassName,
  color = 'black',
  variant = 'body',
  ...props
}) => {
  const className: string = cx(
    { [colorBlack]: color === 'black' },
    { [colorRed]: color === 'red' },
    { [colorSalmon]: color === 'salmon' },
    { [colorWhite]: color === 'white' },
    { [textAlignCenter]: align === 'center' },
    { [textAlignLeft]: align === 'left' },
    { [textAlignRight]: align === 'right' },
    TextUtils.textClassNames[variant],
    otherClassName
  );

  const TextElement: keyof Pick<JSX.IntrinsicElements, TextProps['as']> =
    TextUtils.getTextElement(variant, as);

  return (
    <TextElement className={className} {...props}>
      {children}
    </TextElement>
  );
};

export default Text;
