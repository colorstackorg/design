export type ModalOptions = {
  bottom?: boolean;
};

export type ModalState = {
  closeModal: () => void;
  content: JSX.Element;
  isOpen: boolean;
  options: ModalOptions;
  setOptions: (options: ModalOptions) => void;
  showModal: (content: JSX.Element) => void;
};
