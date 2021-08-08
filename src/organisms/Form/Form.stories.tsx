import React from 'react';

import { css } from '@emotion/css';
import { Meta, Story } from '@storybook/react';
import { Size } from '../../utils/constants';
import Form from './Form';
import FormErrorMessage from './FormErrorMessage';
import FormShortText from './FormShortText';
import FormSubmitButton from './FormSubmitButton';

export const FormStory: Story = () => {
  const onSubmit = () => null;

  const itemClassName: string = css({
    ':not(:last-child)': { marginBottom: Size.MD }
  });

  return (
    <Form onSubmit={onSubmit}>
      <FormShortText
        required
        className={itemClassName}
        name="fullName"
        label="Full Name"
      />

      <FormShortText
        required
        className={itemClassName}
        name="email"
        label="Email Address"
        validation="email"
      />
      <FormErrorMessage />
      <FormSubmitButton invisible />
    </Form>
  );
};

FormStory.storyName = 'Form';

export default {
  title: 'Components/Form'
} as Meta;
