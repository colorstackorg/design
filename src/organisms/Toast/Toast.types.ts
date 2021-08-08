export type Toast = {
  id: string;
  message: string;
  success?: boolean;
};

export type ToastState = {
  items: Toast[];
  removeToast: (id: string) => void;
  showToast: (toast: Pick<Toast, 'message' | 'success'>) => void;
};
