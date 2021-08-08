import React from 'react';

import { ArgTypes, Meta, Story } from '@storybook/react';
import Button from '../../atoms/Button';
import { Toast } from './Toast.types';
import ToastUtils from './Toast.utils';
import ToastPortal from './ToastPortal';

export const ToastStory: Story<Pick<Toast, 'success'>> = ({ success }) => {
  const onClick = (): void => {
    ToastUtils.showToast({
      message: success
        ? 'This is a successful message.'
        : 'This is a failure message.',
      success
    });
  };

  return (
    <>
      <ToastPortal />
      <Button onClick={onClick}>Show Toast</Button>
    </>
  );
};

ToastStory.storyName = 'Toast';

const toastArgTypes: ArgTypes = {
  success: {
    control: { type: 'inline-radio' },
    defaultValue: true,
    options: [false, true]
  }
};

export default {
  argTypes: toastArgTypes,
  title: 'Components/Toast'
} as Meta;
