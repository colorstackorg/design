import { css } from '@emotion/css';
import { MediaQuery } from '../../utils/constants';
import { ITextUtils, TextProps, TextStyle } from './Text.types';

const textStyles: Record<TextProps['variant'], TextStyle> = {
  body: { fontSize: 16, fontWeight: 400 },
  'body-bold': { fontSize: 16, fontWeight: 500 },
  'body-web': { fontSize: 20, fontSizeMobile: 16, fontWeight: 400 },
  'body-web-bold': { fontSize: 20, fontSizeMobile: 16, fontWeight: 500 },
  small: { fontSize: 12, fontWeight: 400 },
  subtitle: { fontSize: 26, fontSizeMobile: 20, fontWeight: 400 },
  'subtitle-bold': { fontSize: 26, fontSizeMobile: 20, fontWeight: 700 },
  title: { fontSize: 42, fontSizeMobile: 26, fontWeight: 700 }
};

/**
 * Returns an Emotion className based on the variant of the component. It uses
 * the textStyles defined above, including any relevant mobile updates.
 */
const makeTextClassName = (variant: TextProps['variant']): string => {
  const { fontSize, fontSizeMobile, fontWeight }: TextStyle =
    textStyles[variant];

  return css({
    fontSize,
    fontWeight,
    [MediaQuery.MOBILE]: { fontSize: fontSizeMobile ?? fontSize }
  });
};

export const bodyBoldClassName: string = makeTextClassName('body-bold');
export const bodyClassName: string = makeTextClassName('body');
export const bodyWebBoldClassName: string = makeTextClassName('body-web-bold');
export const bodyWebClassName: string = makeTextClassName('body-web');
export const smallClassName: string = makeTextClassName('small');
export const subtitleBoldClassName: string = makeTextClassName('subtitle-bold');
export const subtitleClassName: string = makeTextClassName('subtitle');
export const titleClassName: string = makeTextClassName('title');

const textClassNames: Record<TextProps['variant'], string> = {
  body: bodyClassName,
  'body-bold': bodyBoldClassName,
  'body-web': bodyWebClassName,
  'body-web-bold': bodyWebBoldClassName,
  small: smallClassName,
  subtitle: subtitleClassName,
  'subtitle-bold': subtitleBoldClassName,
  title: titleClassName
};

const getTextElement = (
  variant: TextProps['variant'],
  textAs?: TextProps['as']
): keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'p' | 'span'> => {
  if (textAs) return textAs;

  switch (variant) {
    case 'title':
      return 'h1';

    case 'subtitle':
      return 'h2';

    case 'subtitle-bold':
      return 'h2';

    default:
      return 'p';
  }
};

const TextUtils: ITextUtils = {
  getTextElement,
  textClassNames,
  textStyles
};

export default TextUtils;
