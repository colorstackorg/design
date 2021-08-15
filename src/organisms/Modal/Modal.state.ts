import create from 'zustand';

import { ModalOptions, ModalState } from './Modal.types';

const useModal = create<ModalState>((set) => {
  const state: ModalState = {
    closeModal: () => set({ isOpen: false }),
    content: null,
    isOpen: false,
    options: { bottom: false },
    setOptions: (options: ModalOptions) => set({ options }),
    showModal: (content: JSX.Element) => set({ content, isOpen: true })
  };

  return state;
});

export default useModal;
