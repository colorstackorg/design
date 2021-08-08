type TextAlign = 'left' | 'center' | 'right';

type TextAs = 'h1' | 'h2' | 'h3' | 'label' | 'p' | 'span';

type TextColor = 'black' | 'error' | 'gold' | 'teal' | 'white';

type TextVariant =
  | 'body'
  | 'body-bold'
  | 'body-web'
  | 'body-web-bold'
  | 'small'
  | 'subtitle'
  | 'subtitle-bold'
  | 'title';

export type TextProps = React.HTMLProps<HTMLElement> & {
  align?: TextAlign;
  as?: TextAs;
  color?: TextColor;
  variant?: TextVariant;
};

export type TextStyle = {
  fontSize: number;
  fontSizeMobile?: number;
  fontWeight: number;
};

export interface ITextUtils {
  getTextElement: (
    variant: TextProps['variant'],
    textAs?: TextProps['as']
  ) => keyof Pick<JSX.IntrinsicElements, TextProps['as']>;
  textClassNames: Record<TextProps['variant'], string>;
  textStyles: Record<TextProps['variant'], TextStyle>;
}
