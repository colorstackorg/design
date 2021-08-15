import React from 'react';
import { animated, Transition } from 'react-spring';

import { css, cx } from '@emotion/css';
import { Size } from '../../utils/constants';
import useModal from './Modal.state';
import { ModalOptions } from './Modal.types';

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
  maxWidth: 600,
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw'
});

const ModalContainer: React.FC<{ options?: ModalOptions }> = ({
  children,
  options
}) => {
  const show: boolean = useModal((state) => state.isOpen);
  const { bottom } = options ?? {};

  const className: string = cx(baseClassName, {
    [bottomClassName]: bottom,
    [regularClassName]: !bottom
  });

  return (
    <Transition
      items={show}
      enter={bottom ? { bottom: '0vh' } : { height: '90vh', opacity: 1 }}
      from={bottom ? { bottom: '-100vh' } : { height: '0vh', opacity: 0 }}
      leave={bottom ? { bottom: '-100vh' } : { height: '0vh', opacity: 0 }}
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
