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
  loading: {
    control: { type: 'inline-radio' },
    defaultValue: false,
    options: [false, true]
  },
  size: {
    control: { type: 'inline-radio' },
    defaultValue: 'large',
    options: ['small', 'large']
  },
  variant: {
    control: { type: 'inline-radio' },
    defaultValue: 'primary',
    options: ['primary', 'secondary', 'text']
  }
};

export default {
  argTypes: buttonArgTypes,
  title: 'Components/Button'
} as Meta;
