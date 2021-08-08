import React from 'react';

import { Meta, Story } from '@storybook/react';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text/index';
import Modal from './Modal';
import ModalUtils from './Modal.utils';
import ModalPortal from './ModalPortal';

export const ModalStory: Story = () => {
  const onClick = (): void => {
    ModalUtils.showModal(
      <Modal>
        <Text variant="large-title">Hello World!</Text>
        <Text variant="large-title">Hello World!</Text>
        <Text variant="large-title">Hello World!</Text>
        <Text variant="large-title">Hello World!</Text>
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

export default {
  title: 'Components/Modal'
} as Meta;
