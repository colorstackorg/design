import useToast from './Toast.state';
import { ToastState } from './Toast.types';

type IToastUtils = Pick<ToastState, 'showToast'>;

const { showToast } = useToast.getState();

const ToastUtils: IToastUtils = {
  showToast
};

export default ToastUtils;
