import useModal from './Modal.state';
import { ModalState } from './Modal.types';

type IModalUtils = Pick<ModalState, 'closeModal' | 'showModal'>;

const { closeModal, showModal } = useModal.getState();

const ModalUtils: IModalUtils = {
  closeModal,
  showModal
};

export default ModalUtils;
