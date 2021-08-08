import React from 'react';

import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Text from '../../atoms/Text/Text';
import Modal from './Modal';
import { showModal, useModal } from './Modal.state';
import { ModalState } from './Modal.types';
import ModalPortal from './ModalPortal';

const initialState: ModalState = useModal.getState();

describe('<Modal />', () => {
  beforeEach(() => {
    useModal.setState(initialState, true);
    render(<ModalPortal />);
  });

  test('The modal should return after calling showModal().', () => {
    act(() => {
      showModal(
        <Modal>
          <Text>This an example of a text component.</Text>
        </Modal>
      );
    });

    const element: HTMLElement = screen.getByRole('dialog');
    expect(element).toBeInTheDocument();
  });

  test('If the user clicks the "close modal" button, it should close the modal.', async () => {
    act(() => {
      showModal(
        <Modal>
          <Text>This an example of a text component.</Text>
        </Modal>
      );
    });

    const buttonElement: HTMLElement = screen.getByRole('button', {
      name: /Close Modal Button/i
    });

    userEvent.click(buttonElement);

    await waitFor(() => {
      const modalElement: HTMLElement = screen.queryByRole('dialog');
      expect(modalElement).not.toBeInTheDocument();
    });
  });

  test('If the user clicks anywhere on the shader background, it should close the modal.', async () => {
    act(() => {
      showModal(
        <Modal>
          <Text>This an example of a text component.</Text>
        </Modal>
      );
    });

    const shaderElement: HTMLElement = screen.getByLabelText(/Modal Shader/i);
    userEvent.click(shaderElement);

    await waitFor(() => {
      const modalElement: HTMLElement = screen.queryByRole('dialog');
      expect(modalElement).not.toBeInTheDocument();
    });
  });
});
