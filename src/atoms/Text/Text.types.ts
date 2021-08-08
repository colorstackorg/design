type TextAlign = 'left' | 'center' | 'right';
type TextAs = 'h1' | 'h2' | 'h3' | 'p' | 'span';
type TextColor = 'black' | 'salmon' | 'red' | 'white';
type TextVariant =
  | 'body'
  | 'body-bold'
  | 'body-web'
  | 'body-web-bold'
  | 'large-title'
  | 'small'
  | 'small-bold'
  | 'subtitle'
  | 'subtitle-bold'
  | 'title';

export type TextProps = React.HTMLProps<HTMLParagraphElement> & {
  align?: TextAlign;
  as?: TextAs;
  color?: TextColor;
  variant?: TextVariant;
};

export type TextStyle = {
  fontSize: number;
  fontSizeMobile?: number;
  fontWeight: number;
  lineHeight: number;
  lineHeightMobile?: number;
};

export interface ITextUtils {
  getTextElement: (
    variant: TextProps['variant'],
    textAs?: TextProps['as']
  ) => keyof Pick<JSX.IntrinsicElements, TextProps['as']>;
  textClassNames: Record<TextProps['variant'], string>;
  textStyles: Record<TextProps['variant'], TextStyle>;
}
