import React from 'react';

import { ArgTypes, Meta, Story } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export const TextStory: Story<TextProps & { text: string }> = ({
  text,
  ...args
}) => {
  return <Text {...args}>{text}</Text>;
};

TextStory.storyName = 'Text';

const textArgTypes: ArgTypes = {
  color: {
    control: { type: 'inline-radio' },
    defaultValue: 'black',
    options: ['black', 'salmon', 'white']
  },
  text: {
    control: { type: 'text' },
    defaultValue: 'This is an example of text.'
  },
  variant: {
    control: { type: 'inline-radio' },
    defaultValue: 'body',
    options: [
      'small',
      'body',
      'body-bold',
      'body-web',
      'body-web-bold',
      'subtitle',
      'subtitle-bold',
      'title'
    ]
  }
};

export default {
  argTypes: textArgTypes,
  title: 'Components/Text'
} as Meta;
