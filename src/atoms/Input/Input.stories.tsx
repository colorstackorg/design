import React, { useState } from 'react';

import { ArgTypes, Meta, Story } from '@storybook/react';
import Input from './Input';
import { InputProps } from './Input.types';

export const InputStory: Story<InputProps> = (args) => {
  const [searchString, setSearchString] = useState('');
  return <Input onChange={setSearchString} value={searchString} {...args} />;
};

InputStory.storyName = 'Input';

const inputArgTypes: ArgTypes = {
  error: {
    control: { type: 'inline-radio' },
    defaultValue: false,
    options: [false, true]
  },
  fill: {
    control: { type: 'inline-radio' },
    defaultValue: true,
    options: [false, true]
  },
  placeholder: {
    control: { type: 'text' },
    defaultValue: 'First Name'
  },
  variant: {
    control: { type: 'inline-radio' },
    defaultValue: 'body-web',
    options: ['body-web', 'subtitle']
  }
};

export default {
  argTypes: inputArgTypes,
  title: 'Components/Input'
} as Meta;
