import './assets/fonts/Gotham-Bold.ttf';
import './assets/fonts/Gotham-Book.ttf';
import './assets/fonts/Gotham-Light.ttf';
import './assets/fonts/Gotham-Medium.ttf';

import Button from './atoms/Button';
import Input from './atoms/Input';
import Text from './atoms/Text';
import useBreakpoint from './hooks/useBreakpoint';
import Form, {
  FormErrorMessage,
  FormShortText,
  FormState,
  FormSubmitButton,
  useForm
} from './organisms/Form';
import Modal, { closeModal, ModalPortal, showModal } from './organisms/Modal';
import { showToast, ToastPortal } from './organisms/Toast';
import ColorUtils from './utils/ColorUtils';
import { Color, MediaQuery, Size } from './utils/constants';
import Utils from './utils/Utils';

export {
  Button,
  closeModal,
  Color,
  ColorUtils,
  Form,
  FormErrorMessage,
  FormShortText,
  FormState,
  FormSubmitButton,
  useForm,
  Input,
  MediaQuery,
  Modal,
  ModalPortal,
  showModal,
  showToast,
  Size,
  Text,
  ToastPortal,
  useBreakpoint,
  Utils
};
