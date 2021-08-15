import React from 'react';

import { ArgTypes, Meta, Story } from '@storybook/react';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text/index';
import Modal from './Modal';
import ModalUtils from './Modal.utils';
import ModalPortal from './ModalPortal';

export const ModalStory: Story = ({ bottom }) => {
  const onClick = (): void => {
    ModalUtils.showModal(
      <Modal options={{ bottom }}>
        <Text variant="title">Hello World!</Text>
        <Text variant="title">Hello World!</Text>
        <Text variant="title">Hello World!</Text>
        <Text variant="title">Hello World!</Text>
      </Modal>
    );
  };

  return (
    <>
      <ModalPortal />
      <Button onClick={onClick}>Show Modal</Button>
    </>
  );
};

ModalStory.storyName = 'Modal';

const modalArgTypes: ArgTypes = {
  bottom: {
    control: { type: 'inline-radio' },
    defaultValue: false,
    options: [false, true]
  }
};

export default {
  argTypes: modalArgTypes,
  title: 'Components/Modal'
} as Meta;
