import React from 'react';

import { ArgTypes, Meta, Story } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export const ButtonStory: Story<ButtonProps> = ({ variant, ...args }) => {
  const variantText: string = variant[0].toUpperCase() + variant.substring(1);

  return (
    <Button variant={variant} {...args}>
      {variantText} Button
    </Button>
  );
};

ButtonStory.storyName = 'Button';

const buttonArgTypes: ArgTypes = {
  disabled: {
    control: { type: 'inline-radio' },
    defaultValue: false,
    options: [false, true]
  },
  loading: {
    control: { type: 'inline-radio' },
    defaultValue: false,
    options: [false, true]
  },
  variant: {
    control: { type: 'inline-radio' },
    defaultValue: 'primary',
    options: ['primary', 'secondary', 'tertiary']
  }
};

export default {
  argTypes: buttonArgTypes,
  title: 'Components/Button'
} as Meta;
