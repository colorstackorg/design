import React from 'react';
import { animated, Transition } from 'react-spring';

import { css, cx } from '@emotion/css';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Size } from '../../utils/constants';
import useModal from './Modal.state';

const baseClassName: string = css({
  overflow: 'scroll',
  position: 'fixed',
  zIndex: 13
});

const bottomClassName: string = css({
  borderTopLeftRadius: Size.SS,
  borderTopRightRadius: Size.SS,
  left: 0,
  maxHeight: `calc(100vh - ${Size.XL}px)`,
  width: '100vw'
});

const regularClassName: string = css({
  borderRadius: Size.SM,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
});

const ModalContainer: React.FC = ({ children }) => {
  const show: boolean = useModal((state) => state.isOpen);
  const bottom: boolean = useModal((state) => state.options?.bottom);

  const className: string = cx(baseClassName, {
    [bottomClassName]: bottom,
    [regularClassName]: !bottom
  });

  return (
    <Transition
      items={show}
      enter={
        bottom
          ? { bottom: '0vh' }
          : { height: '75vh', opacity: 1, width: '50vw' }
      }
      from={
        bottom
          ? { bottom: '-100vh' }
          : { height: '0vh', opacity: 0, width: '0vw' }
      }
      leave={
        bottom
          ? { bottom: '-100vh' }
          : { height: '0vh', opacity: 0, width: '0vw' }
      }
    >
      {(style, item) => {
        if (!item) return null;

        return (
          <animated.div className={className} style={style}>
            {children}
          </animated.div>
        );
      }}
    </Transition>
  );
};

export default ModalContainer;
