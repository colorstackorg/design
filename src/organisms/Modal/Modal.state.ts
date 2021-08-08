import create from 'zustand';

import { ModalState } from './Modal.types';

const useModal = create<ModalState>((set) => {
  const state: ModalState = {
    closeModal: () => set({ isOpen: false }),
    content: null,
    isOpen: false,
    showModal: (content: JSX.Element) => set({ content, isOpen: true })
  };

  return state;
});

export default useModal;
