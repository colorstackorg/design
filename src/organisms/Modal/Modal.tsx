import React, { useEffect } from 'react';

import { css, cx } from '@emotion/css';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Color, MediaQuery, Size } from '../../utils/constants';
import useModal from './Modal.state';
import { ModalOptions } from './Modal.types';
import ModalCloseButton from './ModalCloseButton';

type ModalProps = React.HTMLProps<HTMLElement> & {
  options?: ModalOptions;
};

const Modal: React.FC<ModalProps> = ({
  children,
  className: otherClassName,
  options,
  ...props
}) => {
  // Disables scrolling on the body when the modal is showing.
  useLockBodyScroll();

  useEffect(() => {
    const { innerWidth } = window;

    const isMobile: boolean = innerWidth <= 568;

    console.log({ isMobile });

    useModal.getState().setOptions({
      ...options,
      bottom: isMobile ? true : options?.bottom
    });
  }, [options]);

  const baseClassName: string = css({
    backgroundColor: Color.WHITE,
    height: '100%',
    paddingBottom: Size.MD,
    paddingTop: Size.MD,
    position: 'relative',
    width: '100%',
    zIndex: 12,
    [MediaQuery.MOBILE]: {
      paddingBottom: Size.SM,
      paddingTop: Size.SM
    }
  });

  const className: string = cx(baseClassName, otherClassName);

  return (
    <aside role="dialog" className={className} {...props}>
      <ModalCloseButton />
      {children}
    </aside>
  );
};

export default Modal;
