import React, { useEffect } from 'react';
import { animated, SpringValue } from 'react-spring';

import { css } from '@emotion/css';
import { Color } from '../../utils/constants';
import { useToast } from './Toast.state';
import { Toast as ToastItem } from './Toast.types';

type ToastProps = ToastItem & { transform: SpringValue<string> };

const Toast: React.FC<ToastProps> = ({ id, message, success, transform }) => {
  const removeToast = useToast((state) => state.removeToast);

  useEffect(() => {
    // After 5 seconds, we remove the toast from the screen.
    const timeout: NodeJS.Timeout = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [id, removeToast]);

  const className: string = css({
    backgroundColor: success ? Color.SUCCESS : Color.ERROR,
    borderBottom: `1px ${Color.WHITE} solid`,
    boxSizing: 'border-box',
    color: Color.WHITE,
    left: 0,
    margin: 0,
    padding: 16,
    position: 'fixed',
    textAlign: 'center',
    top: 0,
    width: '100%'
  });

  return (
    <animated.p className={className} role="alert" style={{ transform }}>
      {message}
    </animated.p>
  );
};

export default Toast;
