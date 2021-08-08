import cases from 'jest-in-case';

import { TestObject } from '../../utils/TestUtils';
import { TextProps } from './Text.types';
import TextUtils, {
  bodyBoldClassName,
  bodyClassName,
  bodyWebBoldClassName,
  bodyWebClassName,
  smallClassName,
  subtitleBoldClassName,
  subtitleClassName,
  titleClassName
} from './Text.utils';

cases(
  'TextUtils.textClassNames',
  ({ input, output }: TestObject<TextProps['variant'], string>) => {
    const actualResult: string = TextUtils.textClassNames[input];
    expect(actualResult).toBe(output);
  },
  {
    'Is body-bold.': { input: 'body-bold', output: bodyBoldClassName },
    'Is body-web-bold.': {
      input: 'body-web-bold',
      output: bodyWebBoldClassName
    },
    'Is body-web.': { input: 'body-web', output: bodyWebClassName },
    'Is body.': { input: 'body', output: bodyClassName },
    'Is small.': { input: 'small', output: smallClassName },
    'Is subtitle-bold.': {
      input: 'subtitle-bold',
      output: subtitleBoldClassName
    },
    'Is subtitle.': { input: 'subtitle', output: subtitleClassName },
    'Is title.': { input: 'title', output: titleClassName }
  }
);
