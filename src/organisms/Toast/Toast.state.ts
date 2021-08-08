import create from 'zustand';

import Utils from '../../utils/Utils';
import { Toast, ToastState } from './Toast.types';

const useToast = create<ToastState>((set, get) => {
  /**
   * Removes the toast item with the given ID from queue of items.
   * @param id - ID of the toast item.
   */
  const removeToast = (id: string): void => {
    const { items } = get();

    const filteredItems: Toast[] = items.filter((toast: Toast) => {
      return toast.id !== id;
    });

    set({ items: filteredItems });
  };

  /**
   * Enqueues the toast item.
   *
   * @param message Message to show in the toast component.
   * @param success True, if the toast is a success. False, if it is an error
   * toast.
   */
  const showToast = ({
    message,
    success = true
  }: Pick<Toast, 'message' | 'success'>): void => {
    const { items } = get();

    set({
      items: [
        ...items,
        {
          id: Utils.uuid(),
          message,
          success
        }
      ]
    });
  };

  const state: ToastState = {
    items: [],
    removeToast,
    showToast
  };

  return state;
});

export default useToast;
