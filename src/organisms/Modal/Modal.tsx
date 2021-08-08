import React from 'react';

import { css, cx } from '@emotion/css';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Color, MediaQuery, Size } from '../../utils/constants';
import ModalCloseButton from './ModalCloseButton';

const Modal: React.FC<React.HTMLProps<HTMLElement>> = ({
  children,
  className: otherClassName,
  ...props
}) => {
  // Disables scrolling on the body when the modal is showing.
  useLockBodyScroll();

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
