import React from 'react';

import { css, cx } from '@emotion/css';
import { getBreakpoint } from '../../hooks/useBreakpoint';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { Color, MediaQuery, Size } from '../../utils/constants';
import { ModalOptions } from './Modal.types';
import ModalCloseButton from './ModalCloseButton';
import ModalContainer from './ModalContainer';

type ModalProps = React.HTMLProps<HTMLElement> & {
  options?: ModalOptions;
};

const Modal: React.FC<ModalProps> = ({
  children,
  className: otherClassName,
  options: initialOptions,
  ...props
}) => {
  // Disables scrolling on the body when the modal is showing.
  useLockBodyScroll();

  // We only execute this once (notice that we're not using the useBreakpoint)
  // hook b/c we don't want to change the modal animations after it's already
  // rendered (for consistency) in experience.
  const isMobile: boolean = getBreakpoint() === 1;

  const options: ModalOptions = {
    ...initialOptions,
    bottom: isMobile ? true : initialOptions?.bottom
  };

  const baseClassName: string = css({
    backgroundColor: Color.WHITE,
    boxSizing: 'border-box',
    height: '100%',
    padding: Size.MD,
    position: 'relative',
    width: '100%',
    zIndex: 12,
    [MediaQuery.MOBILE]: { padding: Size.SM }
  });

  const className: string = cx(baseClassName, otherClassName);

  return (
    <ModalContainer options={options}>
      <aside role="dialog" className={className} {...props}>
        <ModalCloseButton />
        {children}
      </aside>
    </ModalContainer>
  );
};

export default Modal;
