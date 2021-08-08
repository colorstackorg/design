export type ModalState = {
  closeModal: () => void;
  content: JSX.Element;
  isOpen: boolean;
  showModal: (content: JSX.Element) => void;
};
