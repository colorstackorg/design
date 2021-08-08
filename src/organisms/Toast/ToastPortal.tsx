import React from 'react';
import { createPortal } from 'react-dom';
import { TransitionFn, useTransition } from 'react-spring';

import { css } from '@emotion/css';
import Toast from './Toast';
import { useToast } from './Toast.state';
import { Toast as ToastItem } from './Toast.types';

const ToastPortal: React.FC = () => {
  const items: ToastItem[] = useToast((state) => state.items);

  const transitions: TransitionFn<ToastItem, { transform: string }> =
    useTransition(items, {
      enter: { transform: 'translateY(0px)' },
      from: { transform: `translateY(-50vh)` },
      leave: { transform: `translateY(-100vh)` }
    });

  const className: string = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    margin: 0,
    padding: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50
  });

  return createPortal(
    <ul className={className}>
      {transitions(({ transform }, item: ToastItem) => {
        return (
          <Toast
            key={item.id}
            id={item.id}
            message={item.message}
            success={item.success}
            transform={transform}
          />
        );
      })}
    </ul>,
    document.body
  );
};

export default ToastPortal;
