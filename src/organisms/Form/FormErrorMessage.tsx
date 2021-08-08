import React from 'react';

import { css, cx } from '@emotion/css';
import Text from '../../atoms/Text';
import { TextProps } from '../../atoms/Text/Text.types';
import useBreakpoint from '../../hooks/useBreakpoint';
import { useForm } from './Form.state';
import FormUtils from './Form.utils';

const FormErrorMessage: React.FC<TextProps> = ({
  className: otherClassName,
  ...props
}) => {
  const breakpoint: number = useBreakpoint();
  const error: string = useForm((state) => state.error);
  const textVariant = useForm((state) => state.options?.textVariant);

  // Don't show error message if there is none...
  if (!error) return null;

  const marginLeft: string = FormUtils.getLabelMarginLeft(
    breakpoint,
    textVariant
  );

  const baseClassName: string = css({ marginLeft });
  const className: string = cx(baseClassName, otherClassName);

  return (
    <Text className={className} color="red" variant="body" {...props}>
      {error}
    </Text>
  );
};

export default FormErrorMessage;
